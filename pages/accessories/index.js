import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getProductByType } from '../../components/Products/bl';
import Layout from '../../components/Products/Layout'
export async function getStaticProps() {
    const accessories = await getProductByType("ACCESSORIES")
    return {
        props: {
            accessories,
        },
    }
}

export default function Paintings ({ accessories }) {

    return (
        <div>
            <Head>
                <title>Find your favourite accessories</title>
            </Head>
            <Layout products={accessories} category="accessories"/>
        </div>
    )
}