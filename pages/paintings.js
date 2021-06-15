import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getProductByType } from '../components/Products/bl';

export async function getStaticProps() {
    const paintings = await getProductByType("PAINTINGS")
    return {
        props: {
            paintings,
        },
    }
}

export default function Paintings ({paintings}) {

    return (
        <div>
            {paintings && console.log(paintings)}
        </div>
    )
}