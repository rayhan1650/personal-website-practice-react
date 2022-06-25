import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const TopNavigation = () => {
  const [navBackground, setNavBackground] = useState("navBackground");
  const [navTitle, setNavTitle] = useState("navTitle");

  const changeNavbar = () => {
    if (window.scrollY > 100) {
      setNavBackground("navBackgroundScroll");
      setNavTitle("navTitleScroll");
    } else {
      setNavBackground("navBackground");
      setNavTitle("navTitle");
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
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="#">SERVICES</Nav.Link>
              <Nav.Link href="#">COURSES</Nav.Link>
              <Nav.Link href="#">PORTFOLIO</Nav.Link>
              <Nav.Link href="#">CONTACT</Nav.Link>
              <Nav.Link href="#">ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavigation;
