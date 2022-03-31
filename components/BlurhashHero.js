import { Blurhash } from "react-blurhash";
import Image from "react-bootstrap/Image";
import Fade from "react-bootstrap/Fade";

export default function BlurhashHero({
  width,
  height,
  hash,
  image,
  setHero,
  loadImg,
  hero,
}) {
  return (
    <div>
      <div>
        <Fade
          in={!loadImg}
          unmountOnExit={true}
          onExiting={() => setHero(true)}
        >
          <Blurhash
            hash={hash}
            resolutionX={32}
            resolutionY={32}
            width={width}
            height={height}
          />
        </Fade>
      </div>
      <div>
        <Fade in={loadImg && hero} timeout={2000}>
          <Image
            src={image + `&w=${width}` + `&h=${height}`}
            width={width}
            height={height}
          />
        </Fade>
      </div>
    </div>
  );
}
