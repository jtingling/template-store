import { getProductByHandle } from "../../adapters";
import { getProductByType } from "../../components/Products/bl"
import ProductDescription from "../../components/Products/ProductDescription";
export default function Accessory( { accessory }) {
    console.log(accessory)
    return (
        <ProductDescription product={accessory}/>
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
    return {
        props: {
            accessory
        }
    }
}

