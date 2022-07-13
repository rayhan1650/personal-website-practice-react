import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Navbar.Brand as={Link} to="/home" className={navTitle}>
            Rayhan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className={navItem} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} className={navItem} to="/services">
                SERVICES
              </Nav.Link>
              <Nav.Link as={Link} className={navItem} to="/courses">
                COURSES
              </Nav.Link>
              <Nav.Link as={Link} className={navItem} to="/portfolio">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link as={Link} className={navItem} to="/contact">
                CONTACT
              </Nav.Link>
              <Nav.Link as={Link} className={navItem} to="/about">
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
