import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <Container className="mx-auto">
        <h1 className="text-center text-uppercase serviceMainTitle">
          Our Courses
        </h1>

        <Row>
          <Col className="px-3" lg={6} md={12} sm={12}>
            <Row className="border shadow">
              <Col lg={6} md={6} sm={12}>
                <div>
                  <img
                    className="w-100"
                    src="https://st.depositphotos.com/1743476/2446/i/600/depositphotos_24462049-stock-photo-happy-business-in-meeting.jpg"
                    alt="meeting img"
                  />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div>
                  <h5>Web Development</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptates veritatis cupiditate laudantium modi ipsa!
                  </p>
                  <Link className="btn btn-primary" to="/courseDetails">
                    Details
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="px-3" lg={6} md={12} sm={12}>
            <Row className="border shadow">
              <Col lg={6} md={6} sm={12}>
                <div>
                  <img
                    className="w-100"
                    src="https://st.depositphotos.com/1743476/2446/i/600/depositphotos_24462049-stock-photo-happy-business-in-meeting.jpg"
                    alt="meeting img"
                  />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div>
                  <h5>Web Development</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptates veritatis cupiditate laudantium modi ipsa!
                  </p>
                  <Link className="btn btn-primary" to="/courseDetails">
                    Details
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="p-3" lg={6} md={12} sm={12}>
            <Row className="border shadow mt-2">
              <Col lg={6} md={6} sm={12}>
                <div>
                  <img
                    className="w-100"
                    src="https://st.depositphotos.com/1743476/2446/i/600/depositphotos_24462049-stock-photo-happy-business-in-meeting.jpg"
                    alt="meeting img"
                  />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div>
                  <h5>Web Development</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptates veritatis cupiditate laudantium modi ipsa!
                  </p>
                  <Link className="btn btn-primary" to="/courseDetails">
                    Details
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="p-3" lg={6} md={12} sm={12}>
            <Row className="border shadow  mt-2">
              <Col lg={6} md={6} sm={12}>
                <div>
                  <img
                    className="w-100"
                    src="https://st.depositphotos.com/1743476/2446/i/600/depositphotos_24462049-stock-photo-happy-business-in-meeting.jpg"
                    alt="meeting img"
                  />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div>
                  <h5>Web Development</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptates veritatis cupiditate laudantium modi ipsa!
                  </p>
                  <Link className="btn btn-primary" to="/courseDetails">
                    Details
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Courses;
