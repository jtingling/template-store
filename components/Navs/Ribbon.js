import { useState, useEffect, useContext } from 'react';
import { getCartIdFromStorage, getCheckout } from "../../adapters/index";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import { CartContext } from '../../contexts/App'
import Menu from './Menu';

export default function Ribbon() {
    const idContext = useContext(CartContext);
    const [ checkout, setCheckout ] = useState(null)
    const [ clientCheckout, setClientCheckout] = useState(idContext.cartChange)
    useEffect( async()=>{
        setClientCheckout(idContext.cartChange)
        let checkout = await getCheckout(idContext.cartId)
        setCheckout(checkout);

    }, [idContext.cartChange])
    return (
        <> {console.log(checkout)}
            {
                clientCheckout[0].lineItems.length !== 0 ?
                    <Container className="fixed-bottom mw-100 bg-dark text-white p-2">
                        <Row className="w-50 text-center align-items-center m-auto">

                            <Col><Menu type="Ribbon" /></Col>
                            <Col><Navbar.Text>{clientCheckout[0].lineItems.length} items</Navbar.Text></Col>
                            <Col><Navbar.Text>${clientCheckout[0].lineItemsSubtotalPrice.amount}</Navbar.Text></Col>
                            <Col><Button variant='success'><Navbar.Text>CHECKOUT</Navbar.Text></Button></Col>
                        </Row>
                    </Container> :
                    <></>
            }
        </>
    )
}