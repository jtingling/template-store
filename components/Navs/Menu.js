import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useClientWidth } from "../hooks";

const menuConfig = {
  landing: "Landing",
  shoes: "Shoes",
  accessories: "Accessories",
  paintings: "Paintings",
  support: "Support",
  aboutUs: "About Us",
};
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
              <Dropdown.Item href="/landing">
                {menuConfig.landing}
              </Dropdown.Item>
              <Dropdown.Item href="/shoes">{menuConfig.shoes}</Dropdown.Item>
              <Dropdown.Item href="/accessories">
                {menuConfig.accessories}
              </Dropdown.Item>
              <Dropdown.Item href="/paintings">
                {menuConfig.paintings}
              </Dropdown.Item>
              <Dropdown.Item href="/support">
                {menuConfig.support}
              </Dropdown.Item>
              <Dropdown.Item href="/aboutus">
                {menuConfig.aboutUs}
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar>
      );
    }
    return navType;
  }

  return <>{renderNavType(type)}</>;
}
