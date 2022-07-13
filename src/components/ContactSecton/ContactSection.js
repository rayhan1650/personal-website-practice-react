import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MdEmail, MdCall } from "react-icons/md";

const ContactSection = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={6} md={6} sm={12} className="p-2">
            <h2>Quick Connect</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12} className="p-2">
            <h2>Discuss Now</h2>
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
        </Row>
      </Container>
    </>
  );
};

export default ContactSection;
