import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectDetails = ({ id, getName }) => {
  const [projects, setProjects] = useState([]);
  const url = `http://localhost:8000/projectsDetails/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setProjects(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [url]);
  // const {
  //   projects_img_details,
  //   projects_live_url,
  //   projects_name,
  //   projects_sort_desc,
  // } = projects;
  getName(projects[0]?.projects_name);

  const features = projects[0]?.projects_features?.split(".");
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <img
              className="w-100"
              src={projects[0]?.projects_img_details}
              alt="project Img"
            />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h2>{projects[0]?.projects_name}</h2>
            <p className="fs-5">{projects[0]?.projects_sort_desc}</p>
            <ul>
              {features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a
              href={projects[0]?.projects_live_url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Preview
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectDetails;
