import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import { BigPlayButton, Player } from "video-react";
import "video-react/dist/video-react.css";

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row>
          <Col className="videoCard text-center">
            <div>
              <h3 className="text-primary ">How I Do</h3>
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis fuga natus, fugiat saepe ipsa ullam odit porro impedit
                numquam vel! Eius earum atque pariatur amet quisquam itaque
                corrupti dolore voluptates!Facilis fuga natus, fugiat saepe ipsa
                ullam odit porro impedit numquam vel! Eius earum atque pariatur
                amet quisquam itaque corrupti dolore voluptates!
              </p>
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
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
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
