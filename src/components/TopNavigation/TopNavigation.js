import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../asset/css/custom.css";

const TopNavigation = () => {
  const [navBackground, setNavBackground] = useState("navBackground");
  const [navTitle, setNavTitle] = useState("navTitle");
  const [navItem, setNavItem] = useState("navItem");

  const changeNavbar = () => {
    if (window.scrollY > 100) {
      setNavBackground("navBackgroundScroll");
      setNavTitle("navTitleScroll");
      setNavItem("navItemScroll");
    } else {
      setNavBackground("navBackground");
      setNavTitle("navTitle");
      setNavItem("navItem");
    }
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <Navbar
        className={navBackground}
        fixed="top"
        collapseOnSelect
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className={navTitle}>
            Rayhan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className={navItem} href="#">
                HOME
              </Nav.Link>
              <Nav.Link className={navItem} href="#">
                SERVICES
              </Nav.Link>
              <Nav.Link className={navItem} href="#">
                COURSES
              </Nav.Link>
              <Nav.Link className={navItem} href="#">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link className={navItem} href="#">
                CONTACT
              </Nav.Link>
              <Nav.Link className={navItem} href="#">
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavigation;
