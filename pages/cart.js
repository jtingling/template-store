import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { CartContext } from "../contexts/App";
import { useContext, useState } from "react";
import { updateCart } from "../adapters/index";

export default function Cart() {
  const cartContext = useContext(CartContext);

  function getLineItems(clientCheckout) {
    let lineItems = <></>;
    if (clientCheckout.checkout !== 0)
      lineItems = clientCheckout.checkout.lineItems.map((item) => {
        return (
          <Row className="text-end p-1 align-items-center">
            <Col className="text-start">
              <Image
                src={item.variant.image.src}
                width={100}
                height={100}
                layout="intrinsic"
              />
            </Col>
            <Col className="text-start">
              <p>{item.variant.title}</p>
            </Col>
            <Col>
              <p>${item.variant.price}</p>
            </Col>
            <Col>
              <form>
                <input
                  type="number"
                  min="0"
                  max="10"
                  name="quantity"
                  value={item.quantity}
                  onChange={async (e) => {
                    const updatedCart = await updateCart(
                      e,
                      clientCheckout.checkout.id,
                      item.id
                    );
                    clientCheckout.setCheckout(updatedCart);
                  }}
                />
              </form>
            </Col>
            <Col>
              <p>${item.quantity * item.variant.price}</p>
            </Col>
          </Row>
        );
      });
    return lineItems;
  }
  return (
    <div className="mt-5">
      <Container>
        <Row>
          {" "}
          {console.log(cartContext.checkout)}
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
        {getLineItems(cartContext)}
        <Row className="text-end border-top border-dark border-2 flex-column">
          <Col>
            <p>Subtotal: ${cartContext.checkout.subtotalPrice}</p>
          </Col>
          <Col>
            <Button
              variant="dark"
              onClick={() =>
                window.location.replace(cartContext.checkout.webUrl)
              }
            >
              Checkout
            </Button>
          </Col>
          <Col>
            <Link href="/landing">
              <a>continue shopping</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
