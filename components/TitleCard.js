import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";
export default function TitleCard({ title, loadImg, hero }) {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Fade in={loadImg && hero} timeout={3000}>
        <Container>
          <div className="text-center bg-dark text-white p-4 rounded opacity-75 ">
            <h1 className="opacity-100">{title}</h1>
          </div>
        </Container>
      </Fade>
    </div>
  );
}
