import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useClientWidth } from "../hooks";
export default function Menu({ type }) {
  const width = useClientWidth();

  function renderNavType(type) {
    let navType = <></>;
    if (width > 450) {
      navType = (
        <Navbar
          bg="dark"
          variant="dark"
          fixed="top"
          className="justify-content-center"
        >
          <Nav>
            <DropdownButton
              drop="down"
              variant="secondary"
              title="Menu"
              navbar="true"
              key="up"
            >
              <Dropdown.Item href="/landing">Landing</Dropdown.Item>
              <Dropdown.Item href="/shoes">Shoes</Dropdown.Item>
              <Dropdown.Item href="/accessories">Accessories</Dropdown.Item>
              <Dropdown.Item href="/paintings">Paintings</Dropdown.Item>
              <Dropdown.Item href="/support">Support</Dropdown.Item>
              <Dropdown.Item href="/aboutus">About Us</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar>
      );
    }
    return navType;
  }

  return <>{renderNavType(type)}</>;
}
