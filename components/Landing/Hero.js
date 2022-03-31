import React from "react";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import Fade from "react-bootstrap/Fade";
import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useClientHeight, useClientWidth } from "../hooks";

export default function Hero({ blurHash, image }) {
  const [hero, setHero] = useState(false);
  const [loadImg, setLoadImg] = useState(false);
  const width = useClientWidth();
  const height = useClientHeight();

  useEffect(() => {
    setTimeout(() => {
      setLoadImg(true);
    }, 3500);
  }, []);

  return (
    <div>
      <div>
        <div>
          <Fade
            in={!loadImg}
            unmountOnExit={true}
            onExiting={() => setHero(true)}
          >
            <Blurhash
              hash={blurHash}
              resolutionX={32}
              resolutionY={32}
              width={width}
              height={height}
            />
          </Fade>
        </div>
        <div>
          <Fade in={loadImg && hero} timeout={2000}>
            <Image src={image} width={width} height={height} />
          </Fade>
        </div>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle w-100">
        <Fade in={loadImg && hero} timeout={2000}>
          <Container>
            <div className="text-center bg-dark text-white p-4 rounded opacity-75 ">
              <h1>Welcome to "Your ShopName here"!</h1>
              <Link href="/shoes">
                <a>
                  <Button className="mt-3 opacity-100" variant="secondary">
                    Shop Shoes
                  </Button>
                </a>
              </Link>
            </div>
          </Container>
        </Fade>
      </div>
    </div>
  );
}
