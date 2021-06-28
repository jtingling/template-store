import Image from 'next/image'
import Fade from 'react-bootstrap/Fade'
import { useState, useEffect } from 'react'
import { Blurhash } from 'react-blurhash';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useClientHeight, useClientWidth } from '../hooks';

export default function Hero({ blurHash, image }) {
    const [hero, setHero] = useState(false)
    const [loadImg, setLoadImg] = useState(false)
    const width = useClientWidth();
    const height = useClientHeight();

    useEffect(() => {
        setTimeout(() => {
            setLoadImg(true)
        }, 2500)
    }, [])

    return (
        <div>
            <div>
                <div>
                    <Fade in={!loadImg} unmountOnExit={true} onExiting={() => setHero(true)}>
                        <Blurhash hash={blurHash} resolutionX={32} resolutionY={32} width={(width)} height={(height)} />
                    </Fade>
                </div>
                <div >
                    <Fade in={loadImg && hero} timeout={2000}>
                        <Image src={(image + `&w=${width}` + `&h=${height}`)} width={width} height={(height)} priority={true}/>
                    </Fade>
                </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle" >
                <Fade in={loadImg && hero} timeout={2000}>
                    <Container>
                        <Row className="flex-column text-center">
                            <Col><h1>Welcome to "Your ShopName here"!</h1></Col>
                            <Col className="text-center"><Button>Shop Shoes</Button></Col>
                        </Row>
                    </Container>
                </Fade>
            </div>
        </div>
    )
}