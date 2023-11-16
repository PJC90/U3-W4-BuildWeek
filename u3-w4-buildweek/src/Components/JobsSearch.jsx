import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/actions/loading";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftSidebar from "./LeftSideHome";
import RightSideBar from "./RightSideBarHome";
import Chat from "./Chat";


const JobsSearch = function () {
    const isLoading = useSelector((state) => state.loading.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoading(false));
    }, []);

    const [jobs, setJobs] = useState([])
    
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


return(
    <>
         {!isLoading &&
         <>
         <Container>
           <Row className="">
             <Col lg={2}><LeftSidebar/></Col>
             <Col lg={6} className="text-center">
               {jobs &&
               jobs.map((lavori) =>{
                return(
                    <div>{lavori.company_name}</div>
                )
               })
               }
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