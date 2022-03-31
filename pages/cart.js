import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import LineItems from "../components/LineItems";
import { CartContext } from "../contexts/App";
import { updateCart } from "../adapters/index";

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
            <h1>CART</h1>
          </Col>
        </Row>
        <Row className="text-end border-bottom border-dark border-2">
          <Col />
          <Col />
          <Col>
            <p>Price</p>
          </Col>
          <Col>
            <p>Quantity</p>
          </Col>
          <Col>
            <p>Total</p>
          </Col>
        </Row>
        {renderLineItems(cart)}
        <Row className="text-end border-top border-dark border-2 flex-column">
          <Col>
            <p>Subtotal: ${cart.checkout.subtotalPrice}</p>
          </Col>
          <Col>
            <Button
              variant="dark"
              onClick={() => window.location.replace(cart.checkout.webUrl)}
            >
              Checkout
            </Button>
          </Col>
          <Col>
            <Link href="/landing">
              <a className="link-secondary">continue shopping</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
