import axios from "axios";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const TopBanner = () => {
  const [homeTitle, setHomeTitle] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/homeTopTitle")
      .then(function (response) {
        // handle success
        setHomeTitle(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  // console.log(homeTitle);

  return (
    <Fragment>
      <Container fluid className="topFixedBanner p-0">
        <div className="topBannerOverlay">
          <Container className="topContent">
            <Row>
              <Col className="text-white text-center">
                <h1 className="topTitle">{homeTitle[0]?.home_title}</h1>
                <h4 className="topSubTitle">{homeTitle[0]?.home_subtitle}</h4>
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
