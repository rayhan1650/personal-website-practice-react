import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { BigPlayButton, Player } from "video-react";

const CourseDetails = () => {
  return (
    <>
      <Container fluid className="topFixedPage p-0">
        <div className="topPageOverlay">
          <Container className="topPageContent">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <h3 className="text-white">
                  Full Dynamic Website With Admin Panel.
                </h3>
                <h6 className="text-warning">Total Lectures=30</h6>
                <h6 className="text-warning">Total Students=30</h6>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <p className="text-white analysisText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur aliquam beatae iste adipisci error ipsa fugit modi
                  cupiditate expedita labore saepe, voluptatibus illo dolore
                  omnis laborum laudantium dolores ex tempore eum hic! In
                  deleniti saepe ea corporis ut vero dolores odio aliquam
                  perferendis inventore? Maxime voluptatem recusandae fugiat at
                  possimus dicta vero dolorum et alias neque impedit.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h3>Skill You Get</h3>
            <div className="cardSubtitle">
              <p>
                <TiTick className="text-white bg-primary rounded-circle me-1" />
                Unlimited dynamic product category.
              </p>
              <p>
                <TiTick className="text-white bg-primary rounded-circle me-1" />
                System Analysis
              </p>
              <p>
                <TiTick className="text-white bg-primary rounded-circle me-1" />
                Code Testing
              </p>
              <p>
                <TiTick className="text-white bg-primary rounded-circle me-1" />
                App force update system from server.
              </p>
              <p>
                <TiTick className="text-white bg-primary rounded-circle me-1" />
                User can make wishlist.
              </p>
            </div>
            <Button>Buy Now</Button>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              <BigPlayButton position="center" />
            </Player>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseDetails;
