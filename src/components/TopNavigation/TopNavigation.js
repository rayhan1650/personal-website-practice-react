import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const TopNavigation = () => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Rayhan</Navbar.Brand>
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
