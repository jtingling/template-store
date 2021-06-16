import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getProductByType } from '../../components/Products/bl';
import Products from '../../components/Products/Products';

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
            <ul>
            {
                shoes.map((shoe)=> { return <li key={shoe.id}><Link href={`/shoes/${shoe.handle}`}><a>{shoe.title}</a></Link></li>})
            }
            </ul>
        </div>
    )
}