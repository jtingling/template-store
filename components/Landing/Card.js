import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Custom404 from "../../pages/404";
import Product from "../Products/Product";
import { getSingleProduct } from "../../adapters/index";

export default function TopSelling({ product }) {
  const renderTopSellers = () => {
    const categories = ["shoes", "accessories", "paintings"];
    return product.map((item, idx) => {
      return (
        <Product key={item.id} product={item} category={categories[idx]} />
      );
    });
  };
  return (
    <div className="mt-5">
      <Container className="mx-auto">
        <Row className="align-items-center justify-content-center">
          {renderTopSellers()}
        </Row>
      </Container>
    </div>
  );
}
