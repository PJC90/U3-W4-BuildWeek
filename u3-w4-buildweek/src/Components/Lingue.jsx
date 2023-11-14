import { Row, Col } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";

function Lingue(){
    return(
     <div className="d-flex row me-4 ms-2 pb-2 pt-3 ps-2" style={{backgroundColor:'white',borderRadius:'5px',width:'650px'}}>
            <Row>
                <Col ><h3 style={{fontSize:'20px'}}>Lingue</h3></Col>
                <Col className="col col-lg-1"><PlusLg/></Col>
                <Col className="col col-lg-1"><PencilSquare/></Col>
                </Row>
        <div className="pb-2" style={{fontSize:'12px',lineHeight:'5px'}}>
            
            <h5  style={{fontSize:'14px'}}>Inglese</h5>
            <p>Conoscenza professionale</p>
        </div>
        <div className="pb-2" style={{fontSize:'12px',lineHeight:'5px'}}>
            <h5  style={{fontSize:'14px'}}>Italiano</h5>
            <p>Conoscenza madrelingua o bilingue</p>
        </div>
     </div>
    )
}

export default Lingue