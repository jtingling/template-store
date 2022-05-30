import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import DropDown from "./DropDown";
import style from "./[drop-down].module.css";
import sizingChart from "/public/shirt_sizing_chart_480x480_12bf5e0b-48cd-40e5-8c04-bbb74429b713_480x480.png";

const productDetailConfig = {
  sizingChart: "Sizing Chart",
  careInstructions: "Care Instructions",
  listItems: ["Lorem Ipsum", "dolor sit amet", "consectetur adipiscing elit"],
  howItsMade: "How this was Made",
  description: `sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
};
export default function ProductDetail({ product }) {
  return (
    <Accordion>
      <DropDown product={product}>
        <Accordion.Item eventKey={1} className={style.gamma}>
          <Accordion.Header className={style.alpha}>
            <h6 className={`border-bottom border-dark ${style.beta}`}>
              {productDetailConfig.sizingChart}
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
              {productDetailConfig.careInstructions}
            </h6>
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <ul>
                {productDetailConfig.listItems.map((item, idx) => (
                  <li key={item.length + idx}>{item}</li>
                ))}
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={3} className={style.gamma}>
          <Accordion.Header className={style.alpha}>
            <h6 className={`border-bottom border-dark ${style.beta}`}>
              {productDetailConfig.howItsMade}
            </h6>
          </Accordion.Header>
          <Accordion.Body>
            <p>{productDetailConfig.description}</p>
          </Accordion.Body>
        </Accordion.Item>
      </DropDown>
    </Accordion>
  );
}
