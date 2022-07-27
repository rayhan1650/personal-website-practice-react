import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import RecentProject from "./RecentProject";

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/projectsHome")
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
  }, []);
  console.log(projects);
  return (
    <>
      <Container className="mx-auto">
        <h1 className="text-center text-uppercase serviceMainTitle">
          Recent Projects
        </h1>
        <Row>
          {projects.map((project) => (
            <RecentProject key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default RecentProjects;
