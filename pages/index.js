import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import { getAllProducts, getProductCollections } from '../adapters/index'
export default function Home() {

  return (
    <div className={styles.container}>
      <main>
        <div>
          <Link href="/landing/"><a>Landing</a></Link><br/>
          <Link href="/shoes/"><a>shoes</a></Link><br/>
          <Link href="/paintings/"><a>paintings</a></Link><br/>
          <Link href="/accessories/"><a>accessories</a></Link>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
