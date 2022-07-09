import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PageTop = () => {
  return (
    <>
      <Container fluid className="topFixedPage p-0">
        <div className="topPageOverlay">
          <Container className="topPageContent">
            <Row>
              <Col className="text-white text-center">
                <h4 className="topPageTitle">About Me</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default PageTop;
