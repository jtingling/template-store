import Image from "next/image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useClientWidth, useClientHeight } from "../hooks";
import content from "../../data/descriptions.json";
export default function HighlightProduct() {
  const width = useClientWidth();
  const height = useClientHeight();
  return (
    <Container fluid className="m-0 p-0 mt-5">
      <div className="position-relative">
        <Image
          src="https://cdn.shopify.com/s/files/1/0288/6926/3438/files/Web1_1728x.png?v=1593081132"
          width={width}
          height={height}
        />
        {width < 576 ? (
          <div className="bg-white position-absolute top-60 bottom-0 start-5 end-5">
            <div className="text-center">
              <p className="fs-6">{content.shirts.astro.feature}</p>
              <p className="fs-5">{content.shirts.astro.title}</p>
              <div className="lh-sm">
                {content.shirts.astro.content}
                <br />
                <Button className="mt-4">Shop Now</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white position-absolute w-25 h-60 top-10 start-10">
            <div className="text-center mt-5 p-2">
              <p className="fs-5">{content.shirts.astro.title}</p>
              <p className="fs-1">{content.shirts.astro.feature}</p>
              <div className="lh-xl">
                {content.shirts.astro.content}
                <br />
                <Button className="mt-5">Shop Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
