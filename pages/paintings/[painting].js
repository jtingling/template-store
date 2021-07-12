import { getProductByHandle } from "../../adapters";
import { getProductByType } from "../../components/Products/bl"
import ProductDescription from "../../components/Products/ProductDescription";

export default function Painting( { painting }) {
    return (
        <ProductDescription key={painting.id} product={painting}/>
    )
}

export async function getStaticPaths() {
    const paintings = await getProductByType("PAINTING");
    const paths = paintings.map((painting) => {
        return { params: { paintings: '/paintings/', painting: painting.handle }}
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const painting = await getProductByHandle(params.painting)
    return {
        props: {
            painting
        }
    }
}

