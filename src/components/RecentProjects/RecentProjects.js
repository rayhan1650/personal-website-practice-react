import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const RecentProjects = () => {
  return (
    <>
      <Container className="mx-auto">
        <h1 className="text-center text-uppercase serviceMainTitle">
          Recent Projects
        </h1>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="https://cdn.foodbeast.com/content/uploads/2016/02/IMG_0595.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="https://cdn.foodbeast.com/content/uploads/2016/02/IMG_0595.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="https://cdn.foodbeast.com/content/uploads/2016/02/IMG_0595.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecentProjects;
