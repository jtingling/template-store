import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getProductByType } from '../components/Products/bl';

export async function getStaticProps() {
    const shoes = await getProductByType("SHOES")
    return {
        props: {
            shoes,
        },
    }
}
export default function Shoes({ shoes }) {
    return (
        <div>
            <>{shoes && console.log(shoes)}</>
        </div>
    )
}