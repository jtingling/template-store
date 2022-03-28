import content from "../../data/descriptions.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BrandingBlock() {
  return (
    <div className="text-center text-white bg-dark">
      <Container>
        <Row className="align-items-center">
          <h3 className="p-5 fs-1">{content.copy.title}</h3>
          <Col className="px-5">
            <p className="lh-xl px-3 pt-3 pb-5 fs-4">{content.copy.text}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
