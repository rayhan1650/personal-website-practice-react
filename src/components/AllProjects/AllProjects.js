import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import RecentProject from "../RecentProjects/RecentProject";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/projectsAll")
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
  return (
    <>
      <Container className="mx-auto mt-5">
        <Row>
          {projects.map((project) => (
            <RecentProject key={project.id} project={project} />
          ))}
          {/* <Col lg={4} md={6} sm={12}>
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="https://cdn.foodbeast.com/content/uploads/2016/02/IMG_0595.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link className="btn btn-primary" to="/projectDetails">
                  Details
                </Link>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default AllProjects;
