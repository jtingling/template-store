import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useClientWidth, useClientHeight } from "../hooks";
import content from "../../data/descriptions.json";

export default function HighlightProduct() {
  const width = useClientWidth();
  const height = useClientHeight();

  const renderMobile = () => {
    return (
      <div
        style={{ width, height: "100%" }}
        className="bg-white position-absolute top-0 opacity-75 overflow-auto "
      >
        <div className="text-center mt-5 p-2 w-80 mx-auto">
          <p className="fs-7">{content.shirts.astro.title}</p>
          <p className="fs-1">{content.shirts.astro.feature}</p>
          <div className="lh-xl">
            {content.shirts.astro.content}
            <br />
            <Button className="mt-3">Shop Now</Button>
          </div>
        </div>
      </div>
    );
  };

  const renderNonMobile = (width) => {
    return (
      <div
        style={{ width, height: "inherit" }}
        className="bg-white position-absolute top-10 opacity-75"
      >
        <div
          className="text-center mt-1 p-2 w-60 mx-auto"
          style={{ height: `calc(${height} / 2)` }}
        >
          <p className="fs-5">{content.shirts.astro.title}</p>
          <p className="fs-1">{content.shirts.astro.feature}</p>
          <div className="lh-xl fs-6">
            {content.shirts.astro.content}
            <br />
            <Button className="mt-3">Shop Now</Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container fluid className="p-0 mt-5 mb-5 position-relative ">
      <Image
        width={width}
        className="img-fluid "
        src="https://cdn.shopify.com/s/files/1/0288/6926/3438/files/Web1_1728x.png?v=1593081132"
      />
      {width > 576 ? renderNonMobile(width) : renderMobile()}
    </Container>
  );
}
