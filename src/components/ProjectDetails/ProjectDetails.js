import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ProjectDetails = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <img
              className="w-100"
              src="https://cdn.foodbeast.com/content/uploads/2016/02/IMG_0595.jpg"
              alt="project Img"
            />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h2>Foll Bazzar</h2>
            <p className="fs-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              commodi! Consectetur quas dicta perferendis doloremque quo
              incidunt quam molestias id nesciunt deleniti magni quos vero eos
              ex praesentium, laudantium omnis.
            </p>
            <ul>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <Button>Live Preview</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectDetails;
