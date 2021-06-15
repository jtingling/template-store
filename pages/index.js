import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import { getAllProducts, getProductCollections } from '../adapters/index'

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
      props: {
          products,
      },
  }
}

export default function Home({products}) {

  return (
    <div className={styles.container}>
      <main>
        <div>
          {products && console.log(products)}
          <Link href="/shoes"><a>shoes</a></Link><br/>
          <Link href="/paintings"><a>paintings</a></Link>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
