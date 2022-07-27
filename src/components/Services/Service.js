import React from "react";
import { Col, Card } from "react-bootstrap";

const Service = ({ service }) => {
  //   console.log(service);
  const { service_logo, service_name, service_description } = service;
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="p-5 shadow">
        <Card.Img
          variant="top"
          src={service_logo}
          className="w-25 mx-auto py-3"
        />
        <Card.Body className="text-center">
          <Card.Title className="serviceName fw-bold">
            {service_name}
          </Card.Title>
          <Card.Text>{service_description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
