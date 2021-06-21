import { unsplash } from '../adapters/index'
import Head from 'next/head'
import Hero from '../components/Hero';


export async function getServerSideProps() {
    const response = await unsplash.photos.getRandom({ collectionIds: ["936583"] });
    const heroImg = response.response.urls.raw + "&fit=crop"
    return {
        props: {
            blurHash: response.response.blur_hash,
            image: heroImg
        }
    }
}

export default function Landing({ blurHash, image }) {

    return (
        <div className="position-relative">
            <Head>
                <title>Welcome to "Store Name"!</title>
                <meta property="og:title" content="Landing Page" key="title" />
            </Head>
            <Hero blurHash={blurHash} image={image}/>
        </div>

    )
}