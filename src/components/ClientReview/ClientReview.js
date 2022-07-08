import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import Client from "../../asset/images/rayhan.jpg";

const ClientReview = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 3000,
    pauseOnHover: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container>
        <h1 className="text-center text-uppercase serviceMainTitle">
          Client Says
        </h1>
        <Slider {...settings}>
          <div>
            <Row className="text-center">
              <Col className="mx-auto" lg={6} md={6} sm={12}>
                <div>
                  <img
                    width={100}
                    className="rounded-circle mx-auto border border-primary"
                    src={Client}
                    alt="Profile pic"
                  />
                </div>

                <h2>Web Development</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat nemo voluptatum, minima animi qui, reprehenderit
                  quidem eligendi impedit voluptate alias laboriosam.
                  Exercitationem odit voluptas qui alias doloremque? Impedit, et
                  animi.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="text-center">
              <Col className="mx-auto" lg={6} md={6} sm={12}>
                <div>
                  <img
                    width={100}
                    className="rounded-circle mx-auto border border-primary"
                    src={Client}
                    alt="Profile pic"
                  />
                </div>

                <h2>Web Development</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat nemo voluptatum, minima animi qui, reprehenderit
                  quidem eligendi impedit voluptate alias laboriosam.
                  Exercitationem odit voluptas qui alias doloremque? Impedit, et
                  animi.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="text-center">
              <Col className="mx-auto" lg={6} md={6} sm={12}>
                <div>
                  <img
                    width={100}
                    className="rounded-circle mx-auto border border-primary"
                    src={Client}
                    alt="Profile pic"
                  />
                </div>

                <h2>Web Development</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat nemo voluptatum, minima animi qui, reprehenderit
                  quidem eligendi impedit voluptate alias laboriosam.
                  Exercitationem odit voluptas qui alias doloremque? Impedit, et
                  animi.
                </p>
              </Col>
            </Row>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default ClientReview;
