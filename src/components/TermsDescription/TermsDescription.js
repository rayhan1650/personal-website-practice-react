import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TermsDescription = () => {
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
  const lists = info[0]?.terms;
  const list = lists?.split("-");
  // console.log(list);
  return (
    <>
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
            <p>{info[0]?.terms}</p>
            <h2 className="mt-5">My Mission</h2>
            <hr />
            <p>{info[0]?.terms}</p>
            <h2 className="mt-5">My Vision</h2>
            <hr />
            <p>{info[0]?.terms}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TermsDescription;
