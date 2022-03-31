import { useContext } from "react";
import { useDebouncedCallback } from "use-debounce";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { updateCart } from "../adapters/";
import { CartContext } from "../contexts/App";

export default function LineItems({ item }) {
  const cart = useContext(CartContext);

  const handleChange = async (e) => {
    try {
      const updatedCart = await updateCart(e, cart.checkout.id, item.id);
      cart.setCheckout(updatedCart);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Row key={item.id} className="text-end">
      <Col className="text-start">
        <Image
          src={item.variant.image.src}
          width={"100%"}
          height={100}
          layout="intrinsic"
        />
      </Col>
      <Col className="text-start overflow-auto">
        <p>{item.variant.title}</p>
      </Col>
      <Col className="text-end p-0">
        <p>${item.variant.price}</p>
      </Col>
      <Col>
        <input
          type="number"
          min="0"
          max="10"
          name="quantity"
          value={item.quantity}
          onChange={(e) => handleChange(e)}
        />
      </Col>
      <Col>
        <p>${item.quantity * item.variant.price}</p>
      </Col>
    </Row>
  );
}
