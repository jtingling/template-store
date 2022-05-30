import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Product from "./Product";
export default function Layout({ products, category }) {
  const [layoutItems, setLayoutItems] = useState(products);
  return (
    <Container>
      <Row className="row justify-content-evenly">
        {layoutItems.map((item) => {
          return <Product key={item.id} product={item} category={category} />;
        })}
      </Row>
    </Container>
  );
}
