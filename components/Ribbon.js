import { useState, useEffect } from 'react';
import { getCartIdFromStorage, getCheckout } from "../adapters/index";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Ribbon({cart}) {
    const [checkout, setCheckout] = useState(cart);

    return (
        <div> 
            <Container>
                <Row>{
                    checkout !== 0 &&
                    <>
                        <Col></Col>
                        <Col><p>{checkout.lineItems.length} items</p></Col>
                        <Col><p>{checkout.lineItemsSubtotalPrice.amount}</p></Col>
                        <Col><Button><a href={getCheckout.webUrl} />CHECKOUT</Button></Col>
                    </>
                }
                </Row>
            </Container>

        </div>
    )
}