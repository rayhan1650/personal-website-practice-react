import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutDescription = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/information")
      .then(function (response) {
        // handle success
        setInfo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="mt-5">Who I Am</h2>
            <hr />
            <p>{info[0]?.about}</p>
            <h2 className="mt-5">My Mission</h2>
            <hr />
            <p>{info[0]?.about}</p>
            <h2 className="mt-5">My Vision</h2>
            <hr />
            <p>{info[0]?.about}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutDescription;
