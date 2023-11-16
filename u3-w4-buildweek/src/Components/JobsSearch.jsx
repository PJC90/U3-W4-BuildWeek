import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/actions/loading";
import { useEffect, useState } from "react";
import { Accordion, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import LeftSidebar from "./LeftSideHome";
import RightSideBar from "./RightSideBarHome";
import Chat from "./Chat";
import { Bookmark, BookmarkFill, Linkedin } from "react-bootstrap-icons";


const JobsSearch = function () {
    const isLoading = useSelector((state) => state.loading.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoading(false));
    }, []);

    const [jobs, setJobs] = useState([])
    const [isClicked, setIsClicked] = useState([])
    // funzione per cliccare l'icona BookMark su un singolo annuncio
    const handleClick = (id) => {
        setIsClicked((prevIsClicked)=>{
            const isSel = prevIsClicked.includes(id)
            return isSel ?
            prevIsClicked.filter((jobId)=> jobId !== id)
            : [...prevIsClicked, id]
        })
    }
    const getJobs = async () => {
        try {
          const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs");
          if (response.ok) {
            const { data } = await response.json();
            setJobs(data);
          } else {
            throw new Error("Errore nella fetch");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        console.log("use effect!", jobs);
        getJobs();
      }, []);
    //   console.log("use effect!", jobs);

   const sixJobs = jobs.slice(0,20)

return(
    <>
         {!isLoading &&
         <>
         <Container>
           <Row >
             <Col lg={2}><LeftSidebar/></Col>
             <Col lg={6}>
               
               <Card >
               {/* <Card.Header className="fw-bold">Consigliato per te:</Card.Header> */}
               <ListGroup variant="flush">
               <div className="fw-semibold fs-5 mt-4 ms-3">Consigliato per te:</div>
               <p className="text-secondary ms-3">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
                 {jobs &&
                 sixJobs.map((lavori) =>{
                    const jobSelected = isClicked.includes(lavori._id)
                return(
    <ListGroup.Item>          
         <div key={lavori._id}>
            <Row>
                <Col>
         <div className="text-right">{lavori.title}</div> 
            <Card.Link href={lavori.url}>{lavori.company_name}</Card.Link>
             <div>Location: {lavori.candidate_required_location}</div>
             <div className="fs-6 text-secondary d-flex align-items-center">
                <div>Promosso • </div>
                <Linkedin className="text-primary mx-2"/>
                <div>Candidatura semplice</div>
            </div>       
                </Col>
                <Col xs={1}>
                {jobSelected ?
                    <BookmarkFill className="w-100 fs-4" onClick={()=> handleClick(lavori._id)}/>
                    :
                    <Bookmark className="w-100 fs-4" onClick={()=> handleClick(lavori._id)}/>
                }
                </Col>
            </Row>
                <Accordion defaultActiveKey="0" className="my-3">
                <Accordion.Item eventKey="1">
                <Accordion.Header>More Info</Accordion.Header>
                    <Accordion.Body >
                     <div><strong>Category:</strong> {lavori.category}</div>
                         {lavori.job_type && <div><strong>Job Type:</strong> {lavori.job_type}</div>}
                      <div dangerouslySetInnerHTML={{ __html: lavori.description }}></div>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
             </div>
    </ListGroup.Item>
                )
               })}
                
               </ListGroup>
             </Card>
               
             </Col>
             <Col lg={3} style={{marginTop: '1rem'}}>
               <RightSideBar />
             </Col>
           </Row>
         </Container>
         <Container fluid>
         <Row>
           <Col md={5} lg={4} xl={3} className="ms-auto me-5 d-none d-md-block">          
             <Chat />
           </Col>
         </Row>
       </Container>
       </>
         }
    </>
)
}
export default JobsSearch;



// "<p><strong>Application closing date:</strong> Wednesday, 15 September 2021, 06:00 pm (in Canberra)</p>
// <p><strong>Estimated start date:</strong> Thu Sep 30 2021</p>
// <p><strong>Location of work:</strong> All States (remote work available)</p>
// <p><strong>Length of contract:</strong> 6 months</p>
// <p><strong>Contract extensions:</strong> 2x 6 months possible extensions</p>
// <p><strong>Security clearance:</strong> Must have current baseline clearance (Must be Australian Citizen)</p>
// <p><strong>Rates:</strong> $70 - $100 per hour (inc. super)</p>
// <p><br>Responsible for the establishment, management and delivery of a Portfolio/Programme office. Provide portfolio and programme assurance, including the development of relevant standards and processes to ensure that programmes of work are being successfully implemented within relevant constraints.
// <br><br><strong><br></strong><strong>Essential Criteria</strong></p>
// <ol>
// <li>Experience in Project and Programme Management offices, with demonstrated knowledge and experience in the P3O model, Prince/PMBOK or other Project management standard, and Managing Successful Programmes (MSP).</li>
// <li>Experience in developing, implementing and design programme management assurance processes and artefacts.</li>
// </ol>
// "