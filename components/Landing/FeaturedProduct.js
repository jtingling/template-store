import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FeaturedProduct() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center">Featured Product</h2>
        </Col>
      </Row>
      <Row>
        <iframe
          src="//www.youtube.com/embed/YNdS5wqMj7c?rel=0&amp;showinfo=0&amp;vq=720"
          frameBorder="0"
          allowFullScreen=""
          height={600}
          width={800}
        ></iframe>
      </Row>
      <Row>
        <h2 className="text-center">STARRY NIGHT WANDERER BOMBER JACKET</h2>
      </Row>
      <Row>
        <p className="text-center">
          "Gogh” to infinity and beyond in this official collaboration between
          Immersive Van Gogh Exhibit and Bibisama Apparel. Vincent Van Gogh was
          the original Starboy who was infatuated with the night sky and all it
          encompassed. Using bright colours and his trademark brush stroke, this
          exclusive illustration of “Starry Night” stretches past our ordinary
          perceptions and into the unknown.
        </p>
      </Row>
    </Container>
  );
}
