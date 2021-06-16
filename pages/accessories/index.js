import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getProductByType } from '../../components/Products/bl';
import Products from '../../components/Products/Products'

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
                <title>Find your favourite painting</title>
            </Head>
            <ul>
            {
                accessories.map((accessory)=> { return <li key={accessory.id}><Link href={`/accessories/${accessory.handle}`}><a>{accessory.title}</a></Link></li>})
            }
            </ul>
        </div>
    )
}