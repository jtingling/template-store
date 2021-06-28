import Navbar from 'react-bootstrap/Navbar';
import logo from '/public/footer-img.png'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top' className='justify-content-around'>
                <Nav >
                    <Nav.Link href='/landing'>Landing</Nav.Link>
                    <Nav.Link href='/shoes'>Shoes</Nav.Link>
                    <Nav.Link href='/accessories'>Accessories</Nav.Link>
                    <Nav.Link href='/paintings'>Paintings</Nav.Link>
                    <Nav.Link href='/support'>Support</Nav.Link>
                    <Nav.Link href='/aboutus'>About Us</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}