import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MdEmail, MdCall } from "react-icons/md";

const ContactSection = () => {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/footer")
      .then(function (response) {
        // handle success
        setContactInfo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const sendContact = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let obj = {
      name,
      email,
      message,
    };
    console.log(name, email, message);
    axios
      .post("http://localhost:8000/contactSend", JSON.stringify(obj), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={6} md={6} sm={12} className="p-2">
            <h2>Quick Connect</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" id="name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" id="message" />
              </Form.Group>

              <Button onClick={sendContact} variant="primary">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12} className="p-2">
            <h2>Discuss Now</h2>
            <p className="mb-0 text-secondary">{contactInfo[0]?.address}</p>
            <small className="text-secondary">
              <MdEmail className="me-1" />
              {contactInfo[0]?.email}
            </small>
            <br />
            <small className="text-secondary">
              <MdCall className="me-1" />
              {contactInfo[0]?.phone}
            </small>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactSection;
