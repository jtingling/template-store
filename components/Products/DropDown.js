import Accordion from "react-bootstrap/Accordion";
import style from "./[drop-down].module.css";

const dropDownConfig = {
  description: "Description",
};

export default function DropDown({ product, children, idx }) {
  return (
    <>
      <Accordion.Item eventKey={idx} className={`${style.gamma}`}>
        <Accordion.Header className={style.alpha}>
          {!product.description ? (
            product.title
          ) : (
            <h6 className={`border-bottom border-dark ${style.beta} `}>
              {dropDownConfig.description}
            </h6>
          )}
        </Accordion.Header>
        <Accordion.Body>
          {!product.content ? (
            product.descriptionHtml
          ) : (
            <p>{product.content}</p>
          )}
        </Accordion.Body>
      </Accordion.Item>
      {children}
    </>
  );
}
