import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const TopBanner = () => {
  return (
    <Fragment>
      <Container fluid className="topFixedBanner p-0">
        <div className="topBannerOverlay">
          <Container className="topContent">
            <Row>
              <Col className="text-white text-center">
                <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                <h4 className="topSubTitle">Mobile & Web Application</h4>
                <Button variant="primary">More Info</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Fragment>
  );
};

export default TopBanner;
