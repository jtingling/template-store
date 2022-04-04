import DropDown from "./Products/DropDown";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
export default function SupportContent({ data }) {
  function renderAccordion() {
    return data.map((section, idx) => {
      return <DropDown product={section} idx={idx} />;
    });
  }
  return (
    <Container>
      <Accordion>{renderAccordion()}</Accordion>
    </Container>
  );
}
