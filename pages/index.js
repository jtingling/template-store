import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import getProducts from '../adapters/Products/products'
import getAllProducts from '../components/Products/bl';

export async function getStaticProps() {
  const response = getAllProducts;
  let products = await response.map(product => product)
  console.log(products)
  return {
    props: {
      products
    }
  }
}
export default function Home({products}) {

  return (
    <div className={styles.container}>
      {console.log(products)}
      <main>
      </main>
      <footer>
      </footer>
    </div>
  )
}
