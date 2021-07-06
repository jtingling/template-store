import { getProductByHandle } from "../../adapters/index";
import { getProductByType } from "../../components/Products/bl"
import ProductDescription from "../../components/Products/ProductDescription";

export default function Shoe( { shoe }) {
    return (
        <ProductDescription product={shoe}/>
    )
}

export async function getStaticPaths() {
    const shoes = await getProductByType("SHOES");
    const paths = shoes.map((shoe) => {
        return { params: { shoes: '/shoes/', shoe: shoe.handle }}
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const shoe = await getProductByHandle(params.shoe)
    return {
        props: {
            shoe
        }
    }
}

