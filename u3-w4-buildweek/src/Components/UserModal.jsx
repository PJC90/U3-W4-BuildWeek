import { Button, Form, Modal } from "react-bootstrap";

const UserModal = ({ show, handleClose, handleSaveChanges, profileData, setProfileData }) => {
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
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formSurname">
              <Form.Label className="mt-2 mb-1">Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo cognome"
                value={profileData.surname}
                onChange={(e) => setProfileData({ ...profileData, surname: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="mt-2 mb-1">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci la tua mail"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label className="mt-2 mb-1">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci la tua username"
                value={profileData.username}
                onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label className="mt-2 mb-1">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo titolo di studi"
                value={profileData.title}
                onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formArea">
              <Form.Label className="mt-2 mb-1">Residenza</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci la tua residenza"
                value={profileData.area}
                onChange={(e) => setProfileData({ ...profileData, area: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label className="mt-2 mb-1">Immagine</Form.Label>
              <Form.Control
                type="file"
                // accept="image/*"
                placeholder="Inserisci la tua immagine"
                value={profileData.image}
                onChange={(e) => setProfileData({ ...profileData, image: e.target.value })}
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