import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { useClientWidth } from "../hooks";

export default function Ribbon({ checkout }) {
  const width = useClientWidth();
  const calculateCartQuantity = () => {
    if (checkout.lineItems.length !== 0) {
      let total = 0;
      checkout.lineItems.forEach((item) => (total += item.quantity));
      return total;
    }
  };

  return (
    <>
      {checkout.lineItems.length > 0 ? (
        <Container className="fixed-bottom mw-100 bg-dark text-white p-2 ">
          <Row
            className={`d-flex justify-content-center text-center align-items-center ${
              width < 576 && "w-100"
            } w-40 m-auto`}
          >
            <Col>
              <Navbar.Text>
                <Link href="/cart">
                  <a className="link-secondary">
                    {calculateCartQuantity()} items
                  </a>
                </Link>
              </Navbar.Text>
            </Col>
            <Col>
              <Navbar.Text>
                ${checkout.lineItemsSubtotalPrice.amount}
              </Navbar.Text>
            </Col>
            <Col>
              <Button
                variant="success"
                onClick={() => window.location.replace(checkout.webUrl)}
              >
                <Navbar.Text>CHECKOUT</Navbar.Text>
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
