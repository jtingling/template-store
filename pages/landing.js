import { unsplash } from '../adapters/index'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import Hero from '../components/Landing/Hero';
import CategoryCard from '../components/Landing/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Showcase from '../components/Landing/Showcase';
import content from '../components/Landing/descriptions.json';


export async function getServerSideProps() {
    const response = await unsplash.photos.getRandom({ collectionIds: ["936583"] });
    const heroImg = response.response.urls.raw + "&fit=crop&q=50&dpr=1&fit=max"
    return {
        props: {
            blurHash: response.response.blur_hash,
            image: heroImg
        }
    }
}

export default function Landing({ blurHash, image }) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0)
    if (process.browser) {
        useEffect(() => {
            if (document.children[0].clientHeight < 568) {
                setHeight(document.children[0].clientHeight)
            } else {
                setHeight(document.children[0].clientHeight)
            }
        }, [document.children[0].clientHeight])
        useEffect(() => {
            setWidth(document.children[0].scrollWidth)
        }, [document.children[0].scrollWidth])
    }

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
                    <iframe src="//www.youtube.com/embed/YNdS5wqMj7c?rel=0&amp;showinfo=0&amp;vq=720" frameBorder="0" allowfullscreen="" height={600} width={800}></iframe>
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
            <div>
                <Showcase/>
            </div>

        </div>

    )
}