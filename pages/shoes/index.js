import Head from "next/head";
import { unsplash } from "../../adapters/index";
import { getProductByType } from "../../components/Products/bl";
import Layout from "../../components/Products/Layout";
import ContentHeader from "../../components/ContentHeader";
import { useClientWidth, useClientHeight } from "../../components/hooks";

const shoesConfig = {
  title: "Find your favourite art work!",
};
export async function getStaticProps() {
  const shoes = await getProductByType("SHOES");
  const response = await unsplash.photos.getRandom({
    collectionIds: ["936583"],
  });
  const heroImg = await response.response.urls.raw;
  return {
    props: {
      shoes,
      heroImg,
      blurHash: response.response.blur_hash,
    },
  };
}
export default function Shoes({ shoes, heroImg, blurHash }) {
  const width = useClientWidth();
  const height = useClientHeight();
  const image = heroImg + `&fit=crop&q=50&dpr=1&w=${width}&h=${height / 4}`;
  return (
    <div>
      <Head>
        <title>{shoesConfig.title}</title>
      </Head>
      <ContentHeader image={image} productType="Shoes" blurhash={blurHash} />
      <Layout products={shoes} category="shoes" />
    </div>
  );
}
