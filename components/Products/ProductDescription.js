import { useState, useContext, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import ProductDetail from "./ProductDetail";
import { addItemToCart, buyNow } from "../../adapters/index";
import { CartContext } from "../../contexts/App/index";

export default function ProductDescription({ product }) {
  const [item, setItem] = useState(null);
  const [isError, setIsError] = useState(false);
  const checkoutContext = useContext(CartContext);
  let timer;

  const renderCarousel = () => {
    return (
      <Carousel fade className="mw-100" controls={false}>
        {product.images.map((image) => {
          return (
            <Carousel.Item key={image.id} interval={2000}>
              <Image
                src={image.src}
                width={450}
                height={350}
                layout="responsive"
                alt={image.altText}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  };

  const renderSizes = () => {
    return product.options[0].values.map((size, idx) => {
      return (
        <Col key={size.value} className="row justify-content-center gy-1 ">
          <Button
            variant="outline-dark"
            className="w-auto p-1"
            onClick={() => setItem(product.variants[idx])}
          >
            {size.value}
          </Button>
        </Col>
      );
    });
  };

  async function handleClick() {
    let clientCheckout = 0;
    try {
      clientCheckout = await addItemToCart(checkoutContext.checkout.id, item);
      checkoutContext.setCheckout(clientCheckout);
    } catch (e) {
      timer = setTimeout(() => {
        setIsError(true);
      }, 2000);
    }
  }

  useEffect(() => {
    timer = setTimeout(() => {
      setIsError(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isError]);

  return (
    <Container fluid className="mt-5 p-0">
      <Row className="d-flex flex-column flex-sm-row ">
        <Col className="mt-1 p-0">{renderCarousel()}</Col>
        <Col>
          <Row>
            <Col>
              <h1>{product.title}</h1>
            </Col>
          </Row>
          <Row xs={2} className="mt-3">
            <Col className="m-1">
              <span className="display-3">${product.variants[0].price}</span>
            </Col>
            <Col className="m-1">
              <span className="display-7">
                <strong>Shipping calculated at checkout</strong>
              </span>
            </Col>
            <Col className="m-1">
              <p className="display-5">Size</p>
            </Col>
          </Row>
          <Row
            xs={4}
            sm={product.options[0].values}
            className="justify-content-center m-0 p-0"
          >
            {renderSizes()}
          </Row>
          <Row sm={1} className="d-flex flex-column flex-sm-row w-75 mx-auto">
            <Button
              variant="light"
              className="my-3 py-3 px-0 mx-0"
              onClick={handleClick}
            >
              Add To Cart
            </Button>
            <Button
              variant="dark"
              className="py-3 px-0 m-0"
              onClick={async () => {
                try {
                  await buyNow(item.id);
                } catch (e) {
                  setIsError(true);
                }
              }}
            >
              Buy It Now
            </Button>
          </Row>
          <Row
            sm={1}
            className="d-flex flex-column flex-sm-row w-75 mx-auto mt-5"
          >
            <Col>
              <ProductDetail product={product} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Navbar fixed="bottom" role="alert" className="mb-5">
        <Alert
          className="text-center display-6"
          show={isError}
          key={product.id}
          variant="warning"
        >
          Please select a size
        </Alert>
      </Navbar>
    </Container>
  );
}
