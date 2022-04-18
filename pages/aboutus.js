import aboutUsContent from "../data/aboutusContent.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
export default function AboutUs() {
  return (
    <Container className="mt-5 pt-5 text-left w-70 m-auto">
      {aboutUsContent.map((content, idx) => {
        if (idx < 3) {
          return (
            <Row key={`ab-${content.id}`}>
              <h2>{content.title}</h2>
              <p>{content.content}</p>
            </Row>
          );
        } else if (idx >= 3) {
          return (
            <Row key={`ab-${content.id}`}>
              <h2>{content.title}</h2>
              <ol>
                {content.content.map((item, idx) => {
                  return <li key={`${idx}-${content.id}`}>{item}</li>;
                })}
              </ol>
            </Row>
          );
        }
      })}
    </Container>
  );
}
