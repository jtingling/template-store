import Image from 'next/image'
import Fade from 'react-bootstrap/Fade'
import { useState, useEffect } from 'react'
import { Blurhash } from 'react-blurhash';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Hero({ blurHash, image }) {
    const [hero, setHero] = useState(false)
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0)
    const [loadImg, setLoadImg] = useState(false)

    if (process.browser) {
        useEffect(() => {
            if (document.children[0].clientHeight < 568) {
                setHeight(document.children[0].clientHeight * .90)
            } else {
                setHeight(document.children[0].clientHeight)
            }
        }, [document.children[0].clientHeight])
        useEffect(() => {
            setWidth(document.children[0].scrollWidth)
        }, [document.children[0].scrollWidth])
    }

    useEffect(() => {
        setTimeout(() => {
            setLoadImg(true)
        }, 2000)
    }, [])

    return (
        <div className="position-relative">
            <div className="position-absolute">
                <Fade in={!loadImg} timeout={1000} unmountOnExit={true} onExiting={() => setHero(true)}>
                    <Blurhash hash={blurHash} resolutionX={32} resolutionY={32} width={(width)} height={(height * .90)} />
                </Fade>
                <Fade in={loadImg && hero} timeout={1000}>
                    <Image src={(image + `&w=${width}` + `&h=${height}`)} width={width} height={(height * .90)} priority={true} priority={true} />
                </Fade>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <Container>
                    <Row className="flex-column text-center">
                        <Col><h1>Welcome to "Your ShopName here"!</h1></Col>
                        <Col className="text-center"><Button>Shop Shoes</Button></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}