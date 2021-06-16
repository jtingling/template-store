import { getProductByHandle } from "../../adapters";
import { getProductByType } from "../../components/Products/bl"

export default function Painting( { params }) {
    console.log(params)
    return (
        <h1>Hello
        </h1>
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
    console.log(painting);
    return {
        props: {
            params
        }
    }
}

