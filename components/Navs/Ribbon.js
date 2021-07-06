import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './Menu';
import Link from 'next/link'

export default function Ribbon( { checkout }) {

    return (
        <>
            {
                checkout.lineItems.length !== 0 ?
                    <Container className="fixed-bottom mw-100 bg-dark text-white p-2">
                        <Row className="w-50 text-center align-items-center m-auto">

                            <Col><Menu type="Ribbon" /></Col>
                            <Col><Navbar.Text><Link href='/cart'><a>{checkout.lineItems.length} items</a></Link></Navbar.Text></Col>
                            <Col><Navbar.Text>${checkout.lineItemsSubtotalPrice.amount}</Navbar.Text></Col>
                            <Col><Button variant='success' onClick={()=> window.location.replace(checkout.webUrl)}><Navbar.Text>CHECKOUT</Navbar.Text></Button></Col>
                        </Row>
                    </Container> :
                    <></>
            }
        </>
    )
}