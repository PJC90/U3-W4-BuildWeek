import { Col, Row } from "react-bootstrap";
import UniLogo from  '../Static Img/UniUdine.jpg';
import { PlusLg } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";

function Formazione(){
    return(
        <div className="d-flex row me-4 ms-2 pb-2 pt-3 ps-2 mt-3" style={{backgroundColor:'white',borderRadius:'5px',width:'650px'}}>
             <Row>
                <Col ><h3 style={{fontSize:'20px'}}>Formazione</h3></Col>
                <Col className="col col-lg-1"><PlusLg/></Col>
                <Col className="col col-lg-1"><PencilSquare/></Col>
                </Row>
            <Row>
            <Col className="col col-lg-1"><img src={UniLogo} alt="logo" style={{width:'50px',height:'50px'}}/></Col> 
               <Col  className="pb-2" style={{fontSize:'12px',lineHeight:'5px'}}>
               <h4  style={{fontSize:'14px'}}>Università degli Studi di Udine</h4>
               <p style={{fontSize:'14px'}}>Laurea Triennale in Scienze e Tecnologie Multimediali</p>
               <p>2010-2013</p>
               <p>Votazione: 108/110</p>
               </Col>
            </Row>
        </div>
    )
}

export default Formazione