import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getProductByType } from '../../components/Products/bl';
import Layout from '../../components/Products/Layout'

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
            <Head>
                <title>Stylish shoes of all kinds</title>
            </Head>
            <Layout products={shoes} category="shoes"/>
        </div>
    )
}