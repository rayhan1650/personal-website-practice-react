import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const PrivacyDescription = () => {
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
  const lists = info[0]?.privacy;
  const list = lists?.split(".");
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <ul>
              {list?.map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
            <h2 className="mt-5">PARTIES OF THE TERM OF USE AGREEMENTS</h2>
            <hr />
            <p>{info[0]?.privacy}</p>
            <h2 className="mt-5">My Mission</h2>
            <hr />
            <p>{info[0]?.privacy}</p>
            <h2 className="mt-5">My Vision</h2>
            <hr />
            <p>{info[0]?.privacy}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrivacyDescription;
