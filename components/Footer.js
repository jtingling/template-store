import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/footer-img.png";

export default function Footer() {
  return (
    <Container className="my-5 text-center mw-100 position-relative bottom-0 start-0">
      <Row>
        <Col sm={3} className="mb-3">
          <Image src={logo} width={250} height={250} />
        </Col>
        <Col sm={6}>
          <p>
            Bibisama is an Otaku clothing brand that blends the best of the
            culture and art style with unique clothing designs you won't find
            anywhere else.
          </p>
        </Col>
        <Col sm={3} className="mb-5">
          <Row className="text-center mb-2 ">
            <Col>
              <Row>
                <h5>SHOP</h5>
              </Row>
              <Row>
                <Link href="/landing">
                  <a className="link-secondary">Landing</a>
                </Link>
              </Row>
              <Row>
                <Link href="/shoes">
                  <a className="link-secondary">Shoes</a>
                </Link>
              </Row>
              <Row>
                <Link href="/accessories">
                  <a className="link-secondary">Accessories</a>
                </Link>
              </Row>
              <Row>
                <Link href="/paintings">
                  <a className="link-secondary">Paintings</a>
                </Link>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5>SHOP NAME</h5>
              </Row>
              <Row>
                <Link href="/support">
                  <a className="link-secondary">Support</a>
                </Link>
              </Row>
              <Row>
                <Link href="/aboutus">
                  <a className="link-secondary">About Us</a>
                </Link>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
