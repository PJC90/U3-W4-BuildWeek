import { Col, Row } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import Avis from '../Static Img/AVis.png'
import Hospital from '../Static Img/Hospital.png';
import { PencilSquare } from "react-bootstrap-icons";

function Volontariato(){
    return(
        <div className="d-flex row me-4 ms-1 pb-2 pt-3 ps-2" style={{backgroundColor:'white',borderRadius:'5px',width:'660px'}}>
        <Row>
            <Col ><h3 style={{fontSize:'20px'}}>Volontariato</h3></Col>
            <Col className="col col-lg-1"><PlusLg/></Col>
            <Col className="col col-lg-1"><PencilSquare/></Col>
            </Row>

            <Row>
            <Col className="col col-lg-1"><img src={Hospital} alt="logo" style={{width:'50px',height:'50px'}}/></Col> 
               <Col className="pb-2 ms-1" style={{fontSize:'12px',lineHeight:'5px'}}>
               <h4 style={{fontSize:'14px'}}>Core Maintainer</h4>
               <p>HospitalRun</p>
               <p>ago 2019 - dic 2019 - 5 mesi</p>
               <p>Scienza e tecnologia</p>
               </Col>
            </Row>
            <Row>
            <Col className="col col-lg-1"><img src={Avis} alt="logo" style={{width:'50px',height:'30px'}}/></Col> 
               <Col className="pb-2 ms-1" style={{fontSize:'12px',lineHeight:'5px'}}>
               <h4 style={{fontSize:'14px'}}>Donatore di sangue</h4>
               <p>Avis di Gorizia</p>
               <p>set 2013 - presente - 10 anni 3 mesi</p>
               <p>salute</p>
               </Col>
            </Row>
        </div>
    )
}

export default Volontariato