import { unsplash } from "../adapters/index";
import Header from "../components/Landing/Header";
import Hero from "../components/Landing/Hero";
import TopSelling from "../components/Landing/Card";
import Showcase from "../components/Landing/Showcase";
import FeaturedProduct from "../components/Landing/FeaturedProduct";
import HighlightProduct from "../components/Landing/HighlightProduct";
import BrandingBlock from "../components/Landing/BrandingBlock";
import Custom404 from "./404";
import { useClientWidth, useClientHeight } from "../components/hooks";
import { getSingleProduct } from "../adapters/index";

const FEATURED_PRODUCTS = [
  "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyMjUzNDM4NzMxNzY=",
  "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyMjUzNDUyNDk0MzI=",
  "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjU5NjUzNDY5Njg=",
];
export async function getServerSideProps() {
  let heroImg;
  let response;
  let productListing = [];
  try {
    response = await unsplash.photos.getRandom({
      collectionIds: ["936583"],
    });
    if (response.message === "expected JSON response from server.") {
      throw "Used up allotted requests this hour.";
    }
    heroImg = response.response.urls.raw;
  } catch (e) {
    console.error(e);
    response = false;
    heroImg = false;
  }
  productListing = await Promise.all([
    getSingleProduct(FEATURED_PRODUCTS[0]),
    getSingleProduct(FEATURED_PRODUCTS[1]),
    getSingleProduct(FEATURED_PRODUCTS[2]),
  ]);
  return {
    props: {
      blurHash: response ? response.response.blur_hash : "",
      heroImg: heroImg,
      productListing,
    },
  };
}

export default function Landing({ blurHash, heroImg, productListing }) {
  const width = useClientWidth();
  const height = useClientHeight();

  const image = heroImg + `&fit=crop&q=50&dpr=1&w=${width}&h=${height}`;

  return (
    <div>
      <Header />
      {!heroImg ? (
        <div className="bg-gray" width={width} height={height}>
          <Custom404 />
        </div>
      ) : (
        <Hero blurHash={blurHash} image={image} />
      )}
      {productListing.length ? (
        <TopSelling product={productListing} />
      ) : (
        <Custom404 />
      )}
      <FeaturedProduct />
      <HighlightProduct />
      <Showcase productType="Accessories" />
      <BrandingBlock />
    </div>
  );
}
