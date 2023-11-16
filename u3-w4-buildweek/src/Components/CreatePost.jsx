import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { Image, Calendar, FileText } from "react-bootstrap-icons";
import { useRef, useState } from "react";
import CreatePostModal from "./CreatePostModal";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const fileInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async function (e, formInputData) {
    e.preventDefault();
    const objToUse = {
      text: formInputData.text
    };
    const formData = new FormData();
    formData.append("post", selectedFile);
    const URL = `https://striveschool-api.herokuapp.com/api/posts/`;
    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM";
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Authorization: TOKEN,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(objToUse)
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        //imposto l'immagine ->
        if (fileInputRef.current.files.length > 0) {
          try {
            const postsImageEndpoint = `https://striveschool-api.herokuapp.com/api/posts/${data._id}`;
            const endPointToUse = postsImageEndpoint;
            const res = await fetch(endPointToUse, {
              method: "POST",
              headers: {
                Authorization: TOKEN
              },
              body: formData
            });
            if (res.ok) {
              console.log("immagine aggiunta");
            } else {
              throw new Error("Network error.");
            }
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        throw new Error("Network error.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="px-4 bg-white py-4 rounded-3 border">
      <Row className="align-items-center gap-2">
        <div
          className="d-flex justify-content-start px-0"
          style={{ width: "8%" }}
        >
          <div
            className="bg-secondary rounded-circle text-white d-flex justify-content-center align-items-center"
            style={{ width: "40px", height: "40px" }}
          >
            F
          </div>
        </div>
        <Col className="px-0">
          <InputGroup>
            <FormControl
              placeholder="Avvia un post"
              aria-label="New post"
              className="rounded-pill py-2"
              onClick={handleShow}
            />
            <CreatePostModal
              show={show}
              handleClose={handleClose}
              handleSubmit={handleSubmit}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-between">
          <Button
            className="border-0 d-flex justify-content-center align-items-center create-post-btn text-black gap-2"
            size="sm"
            onClick={handleButtonClick}
          >
            <Image /> Contenuti multimediali
          </Button>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <Button
            className="border-0 d-flex justify-content-center align-items-center create-post-btn text-black gap-2"
            size="sm"
          >
            <Calendar /> Evento
          </Button>
          <Button
            className="border-0 d-flex justify-content-center align-items-center create-post-btn text-black gap-2"
            size="sm"
          >
            <FileText /> Scrivi un articolo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePost;
