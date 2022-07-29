import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, small_img, short_title, short_description } = course;
  return (
    <Col className="p-3" lg={6} md={12} sm={12}>
      <Row className="border shadow">
        <Col lg={6} md={6} sm={12}>
          <div>
            <img className="w-100" src={small_img} alt="meeting img" />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div>
            <h5>{short_title}</h5>
            <p>{short_description}</p>
            <Link className="btn btn-primary" to={`/courseDetails/${id}`}>
              Details
            </Link>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Course;
