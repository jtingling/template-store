import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useClientWidth } from '../hooks';
export default function Menu({ type }) {
    const width = useClientWidth();

    function renderNavType(type) {
        let navType = <></>;
        if (type === 'Ribbon' && width > 450) {
            navType = <DropdownButton drop='up' variant="secondary" title="Menu" navbar='true' key='up'>
                <Dropdown.Item href='/landing'>Landing</Dropdown.Item>
                <Dropdown.Item href='/shoes'>Shoes</Dropdown.Item>
                <Dropdown.Item href='/accessories'>Accessories</Dropdown.Item>
                <Dropdown.Item href='/paintings'>Paintings</Dropdown.Item>
                <Dropdown.Item href='/support'>Support</Dropdown.Item>
                <Dropdown.Item href='/aboutus'>About Us</Dropdown.Item>
            </DropdownButton>
        } else if (type === 'Navbar' & width > 450) {
            navType = <Navbar bg="dark" variant="dark" fixed='top' className='justify-content-center'>
                <Nav>
                    <Nav.Item><Nav.Link href='/landing'>Landing</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/shoes'>Shoes</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/accessories'>Accessories</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/paintings'>Paintings</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/support'>Support</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/aboutus'>About Us</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
        } else {
            navType =
                <Navbar bg="dark" variant="dark" fixed='top' className='justify-content-center'>
                    <Nav>
                        <DropdownButton drop='down' variant="secondary" title="Menu" navbar='true' key='up'>
                            <Dropdown.Item href='/landing'>Landing</Dropdown.Item>
                            <Dropdown.Item href='/shoes'>Shoes</Dropdown.Item>
                            <Dropdown.Item href='/accessories'>Accessories</Dropdown.Item>
                            <Dropdown.Item href='/paintings'>Paintings</Dropdown.Item>
                            <Dropdown.Item href='/support'>Support</Dropdown.Item>
                            <Dropdown.Item href='/aboutus'>About Us</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                </Navbar >
        }
        return navType;
    }

    return <>{renderNavType(type)}</>
}