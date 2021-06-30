import { unsplash, getCheckout, setCheckout } from '../adapters/index'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Landing/Hero';
import CategoryCard from '../components/Landing/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Showcase from '../components/Landing/Showcase';
import content from '../components/Landing/descriptions.json';
import { useClientWidth, useClientHeight } from '../components/hooks';

export async function getServerSideProps() {
    const response = await unsplash.photos.getRandom({ collectionIds: ["936583"] });
    const heroImg = response.response.urls.raw
    return {
        props: {
            blurHash: response.response.blur_hash,
            heroImg
        }
    }
}

export default function Landing({ blurHash, heroImg }) {
    const width = useClientWidth();
    const height = useClientHeight();

    const image = heroImg + `&fit=crop&q=50&dpr=1&w=${width}&h=${height}`

    return (
        <div>
            <div className="position-relative">
                <Head>
                    <title>Welcome to "Store Name"!</title>
                    <meta property="og:title" content="Landing Page" key="title" />
                </Head>
                <Hero blurHash={blurHash} image={image} />
            </div>
            <CategoryCard product={[
                'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyMjUzNDM4NzMxNzY=',
                'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyMjUzNDUyNDk0MzI=',
                'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjU5NjUzNDY5Njg='
            ]} />
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2 className="text-center">Featured Product</h2>
                    </Col>
                </Row>
                <Row >
                    <iframe src="//www.youtube.com/embed/YNdS5wqMj7c?rel=0&amp;showinfo=0&amp;vq=720" frameBorder="0" allowFullScreen="" height={600} width={800}></iframe>
                </Row>
                <Row>
                    <h2 className="text-center">STARRY NIGHT WANDERER BOMBER JACKET</h2>
                </Row>
                <Row>
                    <p className="text-center">"Gogh” to infinity and beyond in this official collaboration between Immersive Van Gogh Exhibit
                        and Bibisama Apparel.  Vincent Van Gogh was the original Starboy who was infatuated with the night
                        sky and all it encompassed. Using bright colours and his trademark brush stroke, this exclusive illustration
                        of “Starry Night” stretches past our ordinary perceptions and into the unknown.</p>
                </Row>
            </Container>
            <div >
                <Container fluid className="m-0 p-0 mt-5">
                    <div className="position-relative">
                        <Image src="https://cdn.shopify.com/s/files/1/0288/6926/3438/files/Web1_1728x.png?v=1593081132" width={width} height={height} />
                        {
                            width < 576 ? <div className="bg-white position-absolute w-80 h-30 top-80 start-10">
                                <div>
                                    <p>{content.shirts.astro.feature}</p>
                                    <p>{content.shirts.astro.title}</p>
                                    <div>
                                        {content.shirts.astro.content}
                                        <Button>Shop Now</Button>
                                    </div>
                                </div>
                            </div> :
                                <div className="bg-white position-absolute w-30 h-60 top-10 start-10">
                                    <div>
                                        <p>{content.shirts.astro.feature}</p>
                                        <p>{content.shirts.astro.title}</p>
                                        <div>
                                            {content.shirts.astro.content}
                                            <Button>Shop Now</Button>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </Container>
            </div>
            <div className="mt-5">
                <Showcase productType="Accessories" />
            </div>
            <div className="text-center text-white bg-dark">
                <Container>
                    <Row>
                        <h3>{content.copy.title}</h3>
                        <p>{content.copy.text}</p>
                    </Row>
                </Container>
            </div>
        </div>

    )
}