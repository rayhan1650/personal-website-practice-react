import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import { BigPlayButton, Player } from "video-react";
import "video-react/dist/video-react.css";

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/videoHome")
      .then(function (response) {
        // handle success
        setVideoInfo(response.data);
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
      <Container>
        <Row>
          <Col className="videoCard text-center">
            <div>
              <h3 className="text-primary ">How I Do</h3>
              <p className="fs-5">{videoInfo[0]?.video_description}</p>
              <p className="btn p-0">
                <FaPlayCircle
                  onClick={handleShow}
                  className="text-primary fs-2"
                />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          <Player>
            <source src={videoInfo[0]?.video_url} />
            <BigPlayButton position="center" />
          </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Video;
