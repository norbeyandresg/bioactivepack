import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Container>
        <Navbar light expand="md">
          <NavbarBrand href="/">BIOACTIVE PACK</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              {/* <NavItem> */}
              {/*   <NavLink href="/project-description">Description</NavLink> */}
              {/* </NavItem> */}
              <NavItem>
                <NavLink href="/faq">FAQ</NavLink>
              </NavItem>
              <NavItem className="my-auto">
                <NavLink href="/matrix">
                  <div className="try-button">Try It Out</div>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
