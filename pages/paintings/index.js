import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getProductByType } from '../../components/Products/bl';
import Products from '../../components/Products/Products'

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
            {
                paintings.map((painting)=> { return <li key={painting.id}><Link href={`/paintings/${painting.handle}`}><a>{painting.title}</a></Link></li>})
            }
            </ul>
        </div>
    )
}