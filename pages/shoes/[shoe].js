import { getProductByHandle } from "../../adapters";
import { getProductByType } from "../../components/Products/bl"

export default function Shoe( { params }) {
    console.log(params)
    return (
        <h1>Hello
        </h1>
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
    console.log(shoe);
    return {
        props: {
            params
        }
    }
}

