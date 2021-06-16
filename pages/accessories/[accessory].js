import { getProductByHandle } from "../../adapters";
import { getProductByType } from "../../components/Products/bl"

export default function Accessory( { params }) {
    console.log(params)
    return (
        <h1>Hello
        </h1>
    )
}

export async function getStaticPaths() {
    const accessories = await getProductByType("ACCESSORIES");
    const paths = accessories.map((accessory) => {
        return { params: { accessories: '/accessories/', accessory: accessory.handle }}
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const accessory = await getProductByHandle(params.accessory)
    console.log(accessory);
    return {
        props: {
            params
        }
    }
}

