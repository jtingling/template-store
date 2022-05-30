import { useContext } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import LineItems from "../components/LineItems";
import { CartContext } from "../contexts/App";

const cartConfig = {
  cart: "CART",
  price: "Price",
  quantity: "Quantity",
  total: "Total",
  subTotal: "Subtotal",
  checkout: "Checkout",
  continue: "continue",
};
export default function Cart() {
  const cart = useContext(CartContext);

  function renderLineItems(clientCheckout) {
    if (clientCheckout.checkout.lineItems.length)
      return clientCheckout.checkout.lineItems.map((item) => {
        return <LineItems key={item.id} item={item} />;
      });
  }
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col className="text-center">
            <h1>{cartConfig.cart}</h1>
          </Col>
        </Row>
        <Row className="text-end border-bottom border-dark border-2">
          <Col />
          <Col />
          <Col>
            <p>{cartConfig.price}</p>
          </Col>
          <Col>
            <p>{cartConfig.quantity}</p>
          </Col>
          <Col>
            <p>{cartConfig.total}</p>
          </Col>
        </Row>
        {renderLineItems(cart)}
        <Row className="text-end border-top border-dark border-2 flex-column">
          <Col>
            <p>
              {cartConfig.subTotal}: ${cart.checkout.subtotalPrice}
            </p>
          </Col>
          <Col>
            <Button
              variant="dark"
              onClick={() => window.location.replace(cart.checkout.webUrl)}
            >
              {cartConfig.checkout}
            </Button>
          </Col>
          <Col>
            <Link href="/landing">
              <a className="link-secondary">{cartConfig.continue}</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
