import Alert from "react-bootstrap/Alert";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import {
  addItemToCart,
  getCartIdFromStorage,
  buyNow,
} from "../../adapters/index";
import { CartContext } from "../../contexts/App/index";
import sizingChart from "/public/shirt_sizing_chart_480x480_12bf5e0b-48cd-40e5-8c04-bbb74429b713_480x480.png";

export default function ProductDescription({ product }) {
  const [isDOpen, setIsDOpen] = useState(false);
  const [isSOpen, setIsSOpen] = useState(false);
  const [isCOpen, setIsCOpen] = useState(false);
  const [isHOpen, setIsHOpen] = useState(false);
  const [cartId, setCartId] = useState(null);
  const [item, setItem] = useState(null);
  const [isError, setIsError] = useState(false);
  const checkoutContext = useContext(CartContext);

  function displayError() {
    setTimeout(() => {
      setIsError(false);
    }, 4000);
  }

  async function handleClick() {
    let clientCheckout = 0;
    try {
      clientCheckout = await addItemToCart(checkoutContext.cartId, item);
      checkoutContext.setCheckout(clientCheckout);
      console.log(clientCheckout);
    } catch (e) {
      setIsError(true);
    }
  }

  useEffect(() => {
    console.log(checkoutContext.cartId);
  });
  return (
    <>
      <Container fluid className="mx-0 px-0 mt-5">
        <Row className="d-flex flex-column flex-sm-row">
          <Col>
            <Carousel fade>
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
          </Col>
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
            <Row sm={product.options[0].values}>
              {product.options[0].values.map((size, idx) => {
                return (
                  <Col className="row justify-content-center">
                    <Button
                      variant="outline-dark"
                      className="w-50"
                      onClick={() => setItem(product.variants[idx])}
                    >
                      {size.value}
                    </Button>
                  </Col>
                );
              })}
            </Row>
            <Row
              sm={1}
              className="d-flex flex-column flex-sm-row w-xs-5 w-75 mx-auto"
            >
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
            <Row>
              <Col>
                <Row
                  sm={1}
                  className="d-flex flex-column flex-sm-row w-75 mx-auto mt-5"
                >
                  <Col>
                    <h3
                      onClick={() => setIsDOpen(!isDOpen)}
                      className="border-bottom border-dark"
                    >
                      Description
                    </h3>
                    <Collapse in={isDOpen}>
                      <div>
                        <p>{product.descriptionHtml}</p>
                      </div>
                    </Collapse>
                  </Col>
                  <Col>
                    <h3
                      onClick={() => setIsSOpen(!isSOpen)}
                      className="border-bottom border-dark"
                    >
                      Sizing Chart
                    </h3>
                    <Collapse in={isSOpen}>
                      <div>
                        <p>
                          <Image
                            src={sizingChart}
                            width="460"
                            height="450"
                            layout="responsive"
                            alt="sizing chart"
                          />
                        </p>
                      </div>
                    </Collapse>
                  </Col>
                  <Col>
                    <h3
                      onClick={() => setIsCOpen(!isCOpen)}
                      className="border-bottom border-dark"
                    >
                      Care Instructions
                    </h3>
                    <Collapse in={isCOpen}>
                      <div>
                        <ul>
                          <li>Lorem Ipsum</li>
                          <li>dolor sit amet</li>
                          <li>consectetur adipiscing elit</li>
                        </ul>
                      </div>
                    </Collapse>
                  </Col>
                  <Col>
                    <h3
                      onClick={() => setIsHOpen(!isHOpen)}
                      className="border-bottom border-dark"
                    >
                      How this was Made
                    </h3>
                    <Collapse in={isHOpen}>
                      <p>
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Collapse>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {
        <Navbar fixed="bottom" role="alert">
          <Alert
            className="text-center display-6"
            show={isError}
            key={product.id}
            variant="warning"
          >
            Please select a size
          </Alert>
        </Navbar>
      }
      {displayError()}
    </>
  );
}
