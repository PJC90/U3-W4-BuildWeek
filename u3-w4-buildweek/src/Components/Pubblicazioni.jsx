import { Row,Col } from "react-bootstrap"
import { PlusLg } from "react-bootstrap-icons"
import { PencilSquare } from "react-bootstrap-icons";

function Pubblicazioni(){
    return(
        <div className="d-flex row me-4 ms-2 pb-2 pt-3 ps-2" style={{backgroundColor:'white',borderRadius:'5px',width:'650px'}}>
        <Row className="mb-3">
            <Col ><h3 style={{fontSize:'20px'}}>Pubblicazioni</h3></Col>
            <Col className="col col-lg-1"><PlusLg/></Col>
            <Col className="col col-lg-1"><PencilSquare/></Col>
            </Row>
         
       <Row style={{lineHeight:'2px'}}>
            <strong><p style={{fontSize:'16px'}}>"Corti si nasce: linguaggi e tecniche del videoclip"</p></strong>
            <p style={{fontSize:'12px'}} >Tesi di Laurea Triennale in Scienze e Tecnologie Multimediali presso l'Università degli Studi di Udine</p>
        </Row>
       
        </div>
    )
}
 export default Pubblicazioni