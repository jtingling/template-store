import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getProductByType } from '../../components/Products/bl';
import Layout from '../../components/Products/Layout'

export async function getStaticProps() {
    const paintings = await getProductByType("PAINTING")
    return {
        props: {
            paintings,
        },
    }
}

export default function Paintings ({ paintings }) {

    return (
        <div>
            <Head>
                <title>Find your favourite painting</title>
            </Head>
            <ul>
                <Layout products={paintings} category="paintings"/>
            </ul>
        </div>
    )
}