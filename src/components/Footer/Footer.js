import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <Container fluid className="mt-5 border shadow">
        <Row>
          <Col lg={3} md={6} sm={12} className="p-5">
            <h2>Follow Me</h2>
            <a className="text-decoration-none" href="#">
              <FaFacebook /> Facebook
            </a>
            <br />
            <a className="text-decoration-none" href="#">
              <FaYoutube className="text-danger" /> YouTube
            </a>
          </Col>
          <Col lg={3} md={6} sm={12} className="py-5 ps-5">
            <h2>Address</h2>
            <p className="mb-0 text-secondary">
              Ward 06, Monohardi Pauroshava, Narsingdi
            </p>
            <small className="text-secondary">
              <MdEmail className="me-1" />
              rayhannurmd@gmail.com
            </small>
            <br />
            <small className="text-secondary">
              <MdCall className="me-1" />
              01521211324
            </small>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-5">
            <h2>Information</h2>
            <a className="text-decoration-none text-secondary" href="#">
              About Me
            </a>
            <br />
            <a className="text-decoration-none text-secondary" href="#">
              My Resume
            </a>
            <br />
            <a className="text-decoration-none text-secondary" href="#">
              Contact Me
            </a>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-5">
            <h2>Legal</h2>
            <a className="text-decoration-none text-secondary" href="#">
              Refund Policy
            </a>
            <br />
            <a className="text-decoration-none text-secondary" href="#">
              Terms and Condition
            </a>
            <br />
            <a className="text-decoration-none text-secondary" href="#">
              Privacy Policy
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-center bg-primary py-3 text-white">
        <small>Rayhan &copy; All Right Reserved</small>
      </Container>
    </>
  );
};

export default Footer;
