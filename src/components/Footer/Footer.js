import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

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
            <Link className="text-decoration-none text-secondary" to="/about">
              About Me
            </Link>
            <br />
            <a
              className="text-decoration-none text-secondary"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1EsvQcZ-IMCKBgL-W9drECCs8nlXJlaZL/view?usp=sharing"
            >
              My Resume
            </a>
            <br />
            <Link className="text-decoration-none text-secondary" to="/contact">
              Contact Me
            </Link>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-5">
            <h2>Legal</h2>
            <Link className="text-decoration-none text-secondary" to="/refund">
              Refund Policy
            </Link>
            <br />
            <Link className="text-decoration-none text-secondary" to="/terms">
              Terms and Condition
            </Link>
            <br />
            <Link className="text-decoration-none text-secondary" to="/privacy">
              Privacy Policy
            </Link>
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
