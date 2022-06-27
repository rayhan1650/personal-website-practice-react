import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Summary = () => {
  return (
    <>
      <Container fluid className="summaryBanner p-0 mt-5">
        <div className="summaryBannerOverlay d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col lg={8} md={6} sm={12}>
                <Row className="text-center py-2">
                  <Col lg={6} md={6} sm={6}>
                    <h1 className="countNumber">
                      <CountUp start={0} end={100} duration={0.75}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCell>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle ">Total Projects</h4>
                    <hr
                      className="w-25 bg-white opacity-100 mx-auto"
                      style={{ height: "3px" }}
                    />
                  </Col>
                  <Col lg={6} md={6} sm={6}>
                    <h1 className="countNumber">
                      <CountUp start={0} end={100} duration={0.75}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCell>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle ">Total Clients</h4>
                    <hr
                      className="w-25 bg-white opacity-100 mx-auto"
                      style={{ height: "3px" }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Card className="mx-auto p-4">
                  <Card.Body>
                    <Card.Title className="cardTitle fs-4">
                      How I Work
                    </Card.Title>
                    <div className="cardSubtitle">
                      <p>
                        <TiTick className="text-white bg-primary rounded-circle me-1" />
                        Requirement Gathering
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
                        Implementation
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Summary;
