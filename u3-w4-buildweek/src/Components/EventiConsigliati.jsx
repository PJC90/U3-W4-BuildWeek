import { Carousel,Button, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Event from "../Static Img/Skills.webp";
import Epicode from "../Static Img/corso-gratuito-python-epicode-1024x552.png";
import Photo from "../Static Img/Photo.jpg";
import { ArrowRight } from "react-bootstrap-icons";
import { CameraVideoFill } from "react-bootstrap-icons";

function EventiConsigliati(){
    return(
    <div style={{backgroundColor:"white",borderRadius:'5px'}} border="secondary"> 
      <Row>
        <Row>
        <Col className="d-flex flex-row mt-3 ms-3" style={{fontSize:"16px"}}><strong><p>Eventi consigliati per te</p></strong><ArrowRight className="mt-1 ms-1" style={{width:'20px',height:'20px'}}/></Col>
      </Row>
      <Col>
      <Carousel className="d-flex flex-row justify-content-center" >
        <Carousel.Item  className="pb-2 ps-3 ms-3">
        <Card style={{width:"90%",height:'80%'}}>
     <img src={Event} alt="Skills" style={{borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}} />
      <Card.Body style={{lineHeight:'0.5',fontSize:'12px'}}>
        <p style={{color:'orange'}}>Sab,25 Nov, 14:30</p>
        <p><strong>IMPROVE YOURSELF</strong></p>
        <p>Evento di ALMA Edizioni</p>
        <p className="mb-3"><CameraVideoFill className="me-2"/>Online</p>
        <p className="mt-5">23.000 partecipanti</p>
        <Button variant="outline-info" className="ms-3"   style={{borderRadius:'20px', width:'90%'}} >Visualizza Evento</Button>
      </Card.Body>
    </Card>
        </Carousel.Item>
        <Carousel.Item  className="pb-3 ps-3 ms-3">
        <Card style={{width:"90%",height:'80%'}}>
     <img src={Photo} alt="Skills" style={{borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}} />
      <Card.Body style={{lineHeight:'0.5',fontSize:'12px'}}>
        <p style={{color:'orange'}}>Dom,26 Nov, 15:30</p>
        <p><strong>Photography Day</strong></p>
        <p>Evento di Photo Studio</p>
        <p className="mb-3"><CameraVideoFill className="me-2"/>Online</p>
        <p className="mt-4">30.039 partecipanti</p>
        <Button variant="outline-info" className="ms-3" style={{borderRadius:'20px', width:'90%'}} >Visualizza Evento</Button>
      </Card.Body>
    </Card>
        </Carousel.Item>

        <Carousel.Item  className="pb-3 ps-3 ms-3">
        <Card style={{width:"90%",height:'80%'}}>
     <img src={Epicode} alt="Skills" style={{borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}} />
      <Card.Body style={{lineHeight:'0.5',fontSize:'12px'}}>
        <p style={{color:'orange'}}>Lun,27 Nov, 14:30</p>
        <p><strong>Python per principianti</strong></p>
        <p>Evento di Epicode</p>
        <p className="mb-3"><CameraVideoFill className="me-2"/>Online</p>
        <p className="mt-4">9.038 partecipanti</p>
        <Button variant="outline-info"  className="ms-3" style={{borderRadius:'20px', width:'90%'}}>Visualizza Evento</Button>
      </Card.Body>
    </Card>
        </Carousel.Item>
      </Carousel></Col></Row></div>
    );
  }

export default EventiConsigliati