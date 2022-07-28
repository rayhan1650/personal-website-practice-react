import React from "react";
import { Col, Row } from "react-bootstrap";

const Review = ({ review }) => {
  const { client_img, client_title, client_description } = review;
  return (
    <div>
      <Row className="text-center">
        <Col className="mx-auto" lg={6} md={6} sm={12}>
          <div>
            <img
              width={100}
              className="rounded-circle mx-auto border border-primary"
              src={client_img}
              alt="Profile pic"
            />
          </div>

          <h2>{client_title}</h2>
          <p>{client_description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Review;
