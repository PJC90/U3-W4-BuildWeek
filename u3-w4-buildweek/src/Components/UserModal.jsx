import { Button, Form, Modal, } from "react-bootstrap";

const UserModal = ({ show, handleClose, handleSaveChanges, profileData, setProfileData }) => {
    
  const handleChange = (field, value) => {setProfileData({
    ...profileData, [field]: value})}
  
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Profilo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className="mb-1">Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                onChange={(e) => handleChange( "name", e.target.value )}
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label className="mb-1">Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                onChange={(e) => handleChange( "surname", e.target.value )}
              />
            </Form.Group>
            
            <Form.Group controlId="formEmail">
              <Form.Label className="mt-2 mb-1">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci la tua mail"
                onChange={(e) => handleChange( "email", e.target.value )}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label className="mt-2 mb-1">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci la tua username"
                onChange={(e) => handleChange( "username",  e.target.value )}
              />
            </Form.Group>
            <Form.Group controlId="formBio">
              <Form.Label className="mt-2 mb-1">Bio</Form.Label>
              <Form.Control
                type="text"
                placeholder="inserisci una biografia"
                onChange={(e) => handleChange( "bio", e.target.value )}
              />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label className="mt-2 mb-1">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo titolo di studi"
                onChange={(e) => handleChange( "title",  e.target.value )}
              />
            </Form.Group>
            <Form.Group controlId="formResidenza">
              <Form.Label className="mt-2 mb-1">Residenza</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci la tua residenza"
                onChange={(e) => handleChange( "area",  e.target.value )}
              />
            </Form.Group>
            
            <Form.Group controlId="formImage">
              <Form.Label className="mt-2 mb-1">Immagine</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci la tua immagine"
                onChange={(e) => handleChange("image", e.target.value )}
              />
            </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Salva modifiche
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default UserModal;