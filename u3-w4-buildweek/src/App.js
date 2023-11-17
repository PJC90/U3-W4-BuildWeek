import './App.css'
import Profile from './Components/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BackOffice from './Components/BackOffice'
import OverlayLoading from './Components/OverlayLoading'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import JobsSearch from './Components/JobsSearch'
import { Col, Container, Row } from 'react-bootstrap'
import Chat from "../src/Components/Chat";

function App() {
  return (
    <BrowserRouter>
      <OverlayLoading />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/jobs" element={<JobsSearch />} />
        <Route path="/backOffice" element={<BackOffice />} />
      </Routes>
      <Container fluid>
        <Row>
          <Col md={5} lg={4} xl={3} className="ms-auto me-5 d-none d-md-block">          
            <Chat />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
