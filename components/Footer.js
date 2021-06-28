import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/footer-img.png'

export default function Footer() {

    return (
        <Container className="mt-5 text-center">
            <Row>
                <Col sm={3}><Image src={logo} width={250} height={250} /></Col>
                <Col sm={6}><p>Bibisama is an Otaku clothing brand that blends the best of the culture and art style with unique clothing designs you won't find anywhere else.</p></Col>
                <Col sm={3}>
                    <Row>
                        <Col>
                            <table>
                                <thead>
                                    <tr>
                                        <th>SHOP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link href="/landing"><a>Landing</a></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link href="/shoes"><a>Shirts</a></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link href="/paintings"><a>Paintings</a></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link href="/accessories"><a>Accessories</a></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col>
                            <table>
                                <thead>
                                    <tr>
                                        <th>SHOP NAME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link href="/support"><a>Support</a></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link href="/aboutus"><a>About Us</a></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}