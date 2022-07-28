import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../Courses/Course";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/courseAll")
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
  return (
    <>
      <Container className="mx-auto mt-5">
        <Row>
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllCourses;
