import { Col, Row } from "react-bootstrap";
import CambLogo from  '../Static Img/CambridgeLogo.png';
import { PlusLg } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";

function Certificazioni(){
    return(
        <div className="d-flex row me-4 ms-2 pb-2 pt-3 ps-2" style={{backgroundColor:'white',borderRadius:'5px',width:'650px'}}>
             <Row>
                <Col ><h3 style={{fontSize:'20px'}}>Licenze e Certificazioni</h3></Col>
                <Col className="col col-lg-1"><PlusLg/></Col>
                <Col className="col col-lg-1"><PencilSquare/></Col>
                </Row>
            <Row>
            <Col className="col col-lg-1"><img src={CambLogo} alt="logo" style={{width:'50px',height:'50px'}}/></Col> 
               <Col  className="pb-2" style={{fontSize:'12px',lineHeight:'5px'}}>
               <h4  style={{fontSize:'14px'}}>Cambridge English Level 2 Certificate in ESOL international (First)- Grade A Level C1</h4>
               <h5 style={{fontSize:'14px'}}>Cambridge University Press&assessment</h5>
               <p>Data di rilascio: lug 2014</p>
               </Col>
            </Row>
        </div>
    )
}

export default Certificazioni