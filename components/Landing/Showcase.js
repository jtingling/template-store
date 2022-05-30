import { useState, useEffect } from "react";
import { getProductByType } from "../Products/bl";
import Layout from "../Products/Layout";

const showcaseConfig = {
  title: "Stylish ",
};
export default function Showcase({ productType }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await getProductByType(productType.toUpperCase());
      setProduct(response);
    };
    getProducts();
  }, []);
  return (
    <div className="mt-5">
      <h2 className="text-center mt-5">
        {showcaseConfig.title} {productType}
      </h2>
      {product.length !== 0 ? (
        <Layout products={product} category="accessories" />
      ) : (
        <></>
      )}
    </div>
  );
}
