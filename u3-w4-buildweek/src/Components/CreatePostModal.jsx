import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Camera, Grid3x3GapFill, Type, ThreeDots } from "react-bootstrap-icons";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Form } from "react-bootstrap";

function CreatePostModal({
  show,
  handleClose,
  handleSubmit,
  selectedFile,
  setSelectedFile,
  fileInputRef
}) {
  const personalProfile = useSelector(
    (state) => state.experiences.personalProfile
  );
  const isLoading = useSelector((state) => state.loading.isLoading);
  const [formInputData, setFormData] = useState({ text: undefined });

  // const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="border-0">
        <Row className="gap-2 mb-3">
          <Col xs={1} className="">
            <div
              className="bg-secondary rounded-circle text-white d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              {!isLoading
                ? personalProfile.name.split("")[0].toUpperCase()
                : "!"}
            </div>
          </Col>
          <Col>
            <Modal.Title>
              {!isLoading && personalProfile ? personalProfile.name : null}
            </Modal.Title>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <Form.Control
            as="textarea"
            rows={4}
            className="border-0"
            placeholder="Di cosa vorresti parlare?"
            onChange={(e) => setFormData({ text: e.target.value })}
          />
        </div>
        <div className="d-flex justify-content-between pt-3">
          <div className="d-flex gap-2">
            <Button
              variant="light"
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
              onClick={handleButtonClick}
            >
              <Camera />
            </Button>{" "}
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <Button
              variant="light"
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <Grid3x3GapFill />
            </Button>{" "}
            <Button
              variant="light"
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <Type />
            </Button>
            <Button
              variant="light"
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <ThreeDots />
            </Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-end">
        <Button
          variant="light"
          className="rounded-pill"
          onClick={(e) => handleSubmit(e, formInputData)}
        >
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePostModal;
