import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecentProject = ({ project }) => {
  const { id, projects_img, projects_name, projects_sort_desc } = project;
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="shadow">
        <Card.Img variant="top" src={projects_img} />
        <Card.Body>
          <Card.Title>{projects_name}</Card.Title>
          <Card.Text>{projects_sort_desc}</Card.Text>
          <Link className="btn btn-primary" to={`/projectDetails/${id}`}>
            Details
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecentProject;
