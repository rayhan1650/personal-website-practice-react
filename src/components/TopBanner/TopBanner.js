import axios from "axios";
import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const TopBanner = () => {
  axios
    .get("http://localhost:8000/homeTopTitle")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

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
