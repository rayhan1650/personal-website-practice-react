import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/courseHome")
      .then(function (response) {
        // handle success
        setCourses(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  // console.log(courses);
  return (
    <>
      <Container className="mx-auto">
        <h1 className="text-center text-uppercase serviceMainTitle">
          Our Courses
        </h1>

        <Row>
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Courses;
