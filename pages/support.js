import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SupportContent from "../components/SupportContent";
import supportContent from "../data/supportContent.json";

const supportConfig = {
  pageTitle: "FAQ",
  pageDescription: `When shopping at Bibisama, you might have some inquiries about our
  payment methods, shipping, returns, or exchanges on our apparel and
  accessories. Below are some of the most frequently asked questions
  from our customers. If you still have questions, please reach out to
  us at ??? and we’ll respond to you as soon as we can.`,
};
export default function Support() {
  return (
    <Container className="mt-5">
      <Row>
        <h1 className="mt-5 text-center">{supportConfig.pageTitle}</h1>
      </Row>
      <Row className="text-center p-5">
        <p>{supportConfig.pageDescription}</p>
      </Row>
      <Row>
        <SupportContent data={supportContent} />
      </Row>
    </Container>
  );
}
