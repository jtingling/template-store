import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import DropDown from "./DropDown";
import style from "./[drop-down].module.css";
import sizingChart from "/public/shirt_sizing_chart_480x480_12bf5e0b-48cd-40e5-8c04-bbb74429b713_480x480.png";

export default function ProductDetail({ product }) {
  return (
    <Accordion>
      <DropDown product={product}>
        <Accordion.Item eventKey={1} className={style.gamma}>
          <Accordion.Header className={style.alpha}>
            <h6 className={`border-bottom border-dark ${style.beta}`}>
              Sizing Chart
            </h6>
          </Accordion.Header>
          <Accordion.Body>
            <Image
              src={sizingChart}
              width="460"
              height="450"
              layout="responsive"
              alt="sizing chart"
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={2} className={style.gamma}>
          <Accordion.Header className={`${style.alpha}`}>
            <h6 className={`border-bottom border-dark ${style.beta}`}>
              Care Instructions
            </h6>
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <ul>
                <li>Lorem Ipsum</li>
                <li>dolor sit amet</li>
                <li>consectetur adipiscing elit</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={3} className={style.gamma}>
          <Accordion.Header className={style.alpha}>
            <h6 className={`border-bottom border-dark ${style.beta}`}>
              How this was Made
            </h6>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </DropDown>
    </Accordion>
  );
}
