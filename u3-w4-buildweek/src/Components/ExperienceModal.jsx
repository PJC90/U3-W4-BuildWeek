import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

const ExperienceModal = ({ personalProfile }) => {
  const [formInputData, setFormData] = useState({
    role: "",
    company: "",
    description: "",
    area: "",
    image: ""
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [userId, setUserId] = useState(personalProfile._id);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (!userId) {
      alert(userId);
      throw new Error("manca l'userId");
    }
    const objToUse = {
      role: formInputData.role,
      company: formInputData.company,
      startDate: formInputData.startDate,
      description: formInputData.description,
      area: formInputData.area
    };
    const formData = new FormData();
    formData.append("experience", selectedFile);
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
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
        try {
          const experiencesImageEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${data._id}/picture`;
          const endPointToUse = experiencesImageEndpoint;
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
      } else {
        throw new Error("Network error.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormDataChange = function (key, value) {
    setFormData({ ...formInputData, [key]: value });
  };

  return (
    <>
      <button className="bg-white border-0 text-primary" onClick={handleShow}>
        Add
      </button>

      <Modal show={show} onHide={handleClose} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Compila il Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <Form.Group controlId="formRole">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il ruolo"
                onChange={(e) => {
                  handleFormDataChange("role", e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formStartDate">
              <Form.Label>Data Inizio</Form.Label>
              <Form.Control
                type="text"
                placeholder="2022-06-18"
                onChange={(e) => {
                  handleFormDataChange("startDate", e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formEndDate">
              <Form.Label>Data Fine (Opzionale)</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  handleFormDataChange("endDate", e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formCompany">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome dell'azienda"
                onChange={(e) => {
                  handleFormDataChange("company", e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  handleFormDataChange("description", e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Immagine</Form.Label>
              <Form.Control type="file" onChange={(e) => handleFileChange(e)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Invia
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExperienceModal;
