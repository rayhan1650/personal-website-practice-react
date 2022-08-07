import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { BigPlayButton, Player } from "video-react";

const CourseDetails = ({ id }) => {
  const [courseDetails, setCourseDetails] = useState([]);
  const [video, setVideo] = useState(
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  );
  const url = `http://localhost:8000/courseDetails/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setCourseDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [url]);

  useEffect(() => {
    courseDetails && setVideo(courseDetails[0]?.video_url);
  }, []);

  //console.log(courseDetails[0]?.video_url);

  const features = courseDetails[0]?.skills_all?.split(". ");
  return (
    <>
      <Container fluid className="topFixedPage p-0">
        <div className="topPageOverlay">
          <Container className="topPageContent">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <h3 className="text-white">{courseDetails[0]?.long_title}</h3>
                <h6 className="text-warning">
                  Total Lectures={courseDetails[0]?.total_lecture}
                </h6>
                <h6 className="text-warning">
                  Total Students={courseDetails[0]?.total_student}
                </h6>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <p className="text-white analysisText">
                  {courseDetails[0]?.long_description}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h3>Skill You Get</h3>
            <div className="cardSubtitle">
              {features?.map((feature, index) => (
                <p key={index}>
                  <TiTick className="text-white bg-primary rounded-circle me-1" />
                  {feature}
                </p>
              ))}
            </div>
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              href={courseDetails[0]?.course_link}
            >
              Buy Now
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Player>
              <source src={video} />
              <BigPlayButton position="center" />
            </Player>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseDetails;
