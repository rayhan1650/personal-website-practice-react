import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import GraphicsLogo from "../../asset/images/graphics.svg";
import MobileLogo from "../../asset/images/mobile.svg";
import WebLogo from "../../asset/images/web.svg";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/services")
      .then(function (response) {
        // handle success
        setServices(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  // console.log(services);
  return (
    <>
      <Container className="mx-auto">
        <h1 className="text-center text-uppercase serviceMainTitle">
          My Services
        </h1>

        <Row>
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;
