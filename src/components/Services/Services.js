import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import GraphicsLogo from "../../asset/images/graphics.svg";
import MobileLogo from "../../asset/images/mobile.svg";
import WebLogo from "../../asset/images/web.svg";

const Services = () => {
  return (
    <>
      <Container className="mx-auto">
        <h1 className="text-center text-uppercase serviceMainTitle">
          My Services
        </h1>

        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card className="p-5 shadow">
              <Card.Img
                variant="top"
                src={WebLogo}
                className="w-25 mx-auto py-3"
              />
              <Card.Body className="text-center">
                <Card.Title className="serviceName fw-bold">
                  Web Development
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="p-5 shadow">
              <Card.Img
                variant="top"
                src={MobileLogo}
                className="w-25 mx-auto py-3"
              />
              <Card.Body className="text-center">
                <Card.Title className="serviceName fw-bold">
                  Mobile Development
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="p-5 shadow">
              <Card.Img
                variant="top"
                src={GraphicsLogo}
                className="w-25 mx-auto py-3"
              />
              <Card.Body className="text-center">
                <Card.Title className="serviceName fw-bold">
                  Graphics Design
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
