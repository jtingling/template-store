import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useClientWidth } from "../hooks";

export default function Product({ product, category }) {
  const [isVisible, setIsVisible] = useState(false);
  const width = useClientWidth();

  return (
    <div
      className="mx-3 my-1"
      style={{ width: 350 }}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <Link href={`/${category}/${product.handle}`}>
        <a>
          <Image
            key={product.id}
            src={product.images[0].src}
            width={350}
            height={300}
          />
        </a>
      </Link>
      {width > 768 ? (
        <p
          className={`text-center text-wrap ${
            isVisible ? "visible" : "invisible"
          }`}
        >
          {product.title}
        </p>
      ) : (
        <p className={`text-center text-wrap visible`}>{product.title}</p>
      )}
    </div>
  );
}
