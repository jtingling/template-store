import { unsplash } from '../adapters/index'
import Head from 'next/head'
import Hero from '../components/Landing/Hero';
import CategoryCard from '../components/Landing/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

        </div>

    )
}