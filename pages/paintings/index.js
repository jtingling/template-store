import Head from "next/head";
import { unsplash } from "../../adapters/index";
import { getProductByType } from "../../components/Products/bl";
import Layout from "../../components/Products/Layout";
import ContentHeader from "../../components/ContentHeader";
import { useClientWidth, useClientHeight } from "../../components/hooks";

const paintingsConfig = {
  title: "Find your favourite art work!",
};

export async function getStaticProps() {
  const paintings = await getProductByType("PAINTING");
  const response = await unsplash.photos.getRandom({
    collectionIds: ["936583"],
  });
  const heroImg = await response.response.urls.raw;

  return {
    props: {
      paintings,
      heroImg,
      blurHash: response.response.blur_hash,
    },
  };
}

export default function Paintings({ paintings, heroImg, blurHash }) {
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
        productType="Paintings"
        blurhash={blurHash}
      />
      <Layout products={paintings} category="paintings" />
    </div>
  );
}
