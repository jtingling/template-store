import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import Link from 'next/link'
import { getSingleProduct } from '../../adapters/index'
import { useEffect, useState } from 'react'

export default function CategoryCard({ product }) {
    const [imgCat1, setImgCat1] = useState(null);
    const [imgCat2, setImgCat2] = useState(null);
    const [imgCat3, setImgCat3] = useState(null);

    useEffect(async () => {
        const cat1 = await getSingleProduct(product[0]);
        const cat2 = await getSingleProduct(product[1]);
        const cat3 = await getSingleProduct(product[2]);
        setImgCat1(cat1);
        setImgCat2(cat2);
        setImgCat3(cat3);
    }, [])

    return (
        <div className="mt-5">
            <Container >
                <Row className="align-items-center">
                    <Col >
                        <Card>
                            <Link href="/shoes/">
                                <a>
                                    {imgCat1 && <Card.Img variant="top" src={imgCat1.images[0].src} as={Image} width={416} height={307} />}
                                    <Card.ImgOverlay className="text-center top-50">
                                        <Card.Title >Shoes</Card.Title>
                                        <Card.Text>
                                            A wide selection of Shoes!
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </a>
                            </Link>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Link href="/accessories/">
                                <a>
                                    {imgCat2 && <Card.Img variant="top" src={imgCat2.images[0].src} as={Image} width={416} height={307} />}
                                    <Card.ImgOverlay className="text-center top-50">
                                        <Card.Title>Accessories</Card.Title>
                                        <Card.Text>
                                            A wide selection of Accessories!
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </a>
                            </Link>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Link href="/paintings">
                                <a>
                                    {imgCat3 && <Card.Img variant="top" src={imgCat3.images[0].src} as={Image} width={416} height={307} />}
                                    <Card.ImgOverlay className="text-center top-50">
                                        <Card.Title >Paintings</Card.Title>
                                        <Card.Text>
                                            A wide selection of Paintings!
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </a>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}