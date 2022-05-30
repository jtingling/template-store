import Head from "next/head";
import { unsplash } from "../../adapters/index";
import { getProductByType } from "../../components/Products/bl";
import Layout from "../../components/Products/Layout";
import ContentHeader from "../../components/ContentHeader";
import { useClientWidth, useClientHeight } from "../../components/hooks";

const accessoriesConfig = {
  title: "Find your favourite accessories",
};

export async function getStaticProps() {
  const accessories = await getProductByType("ACCESSORIES");
  const response = await unsplash.photos.getRandom({
    collectionIds: ["936583"],
  });
  const heroImg = await response.response.urls.raw;
  return {
    props: {
      accessories,
      heroImg,
      blurHash: response.response.blur_hash,
    },
  };
}

export default function Accessories({ accessories, heroImg, blurHash }) {
  const width = useClientWidth();
  const height = useClientHeight();
  const image = heroImg + `&fit=crop&q=50&dpr=1&w=${width}&h=${height}`;
  return (
    <div>
      <Head>
        <title>{paintingsConfig.title}</title>
      </Head>
      <ContentHeader
        image={image}
        productType="Accessories"
        blurhash={blurHash}
      />
      <Layout products={accessories} category="accessories" />
    </div>
  );
}
