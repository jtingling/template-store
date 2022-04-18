import { useClientWidth, useClientHeight } from "./hooks";
import { useState, useEffect } from "react";
import TitleCard from "../components/TitleCard";
import BlurhashHero from "./BlurhashHero";
import productDescription from "../data/productDescription.json";

export default function ContentHeader({ image, productType, blurhash }) {
  const width = useClientWidth();
  const height = useClientHeight();
  const [hero, setHero] = useState(false);
  const [loadImg, setLoadImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadImg(true);
    }, 2500);
  }, []);

  return (
    <div className="position-relative mt-5">
      <BlurhashHero
        width={width}
        height={height * 0.5}
        hash={blurhash}
        image={image}
        loadImg={loadImg}
        setHero={setHero}
        hero={hero}
      />
      <TitleCard
        title={productType}
        description={productDescription.data}
        loadImg={loadImg}
        hero={hero}
      />
    </div>
  );
}
