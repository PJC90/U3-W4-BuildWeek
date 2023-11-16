import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SfondoProfilo from '../SidebarImgs/sfondogrigio.jpg';
import {PersonPlusFill, SquareFill, Plus, FlagFill} from 'react-bootstrap-icons';
import '../Sidebar.css';


const LeftSidebar = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM", 
          },
        });

        if (!response.ok) {
          throw new Error('err');
        }

        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Errore:', error);
      }
    };

    fetchData();
  }, []); 

  console.log(profileData)

  return (
    <>
      <div className='bg-white rounded border'>
        <div style={{ position: "relative" }}>
          <img src={SfondoProfilo} alt="" style={{height:'3em', width:'100%'}} className="img-fluid"/>
          <div className='d-flex justify-content-center'>
          {profileData && 
          <img src={profileData.image || ''} 
          alt="immagineprofilo" 
          className='border border-white' 
          style={{width : '4em',
                position: "absolute",
                top: "110%",
                left: "35%",
                transform: "translateY( -70%)",
                borderRadius: "50%",
                border: "5px solid white"}} />} 
          </div>
        </div>
        <div className='text-center mt-4'>
          {profileData && (
            <>
              <Link to="/me" className='text-decoration-none text-black fw-bold nomecognome'>{profileData.name} {profileData.surname}</Link>
              <p className='mt-1 text-secondary' style={{fontSize : '0.8em'}}>{profileData.title}; {profileData.bio}</p>
            </>
          )}
        </div>
            <div className='border-top border-bottom pt-3 pb-3 ps-3 d-flex sez1' >
                <div >
                <p className='mb-0 text-secondary' style={{fontSize : '0.8em'}}>Collegamenti</p>
                <p className='mb-0' style={{fontSize : '0.8em'}}>Espandi la tua rete</p>
                </div>
                <div>
                 <PersonPlusFill className='ms-4'/>
                </div>
            </div>
            <div className='border-bottom pb-2 pt-2 ps-3 sez2'>
                <p style={{fontSize : '0.8em'}} className='mb-0 text-secondary'>Accedi a strumenti e informazioni in esclusiva</p>
                <a href='#'style={{fontSize : '0.8em'}} className='text-decoration-underline text-black'><SquareFill className='text-warning me-1'/>Prova Premium per 0 EUR</a>
            </div>
            <div className='pb-2 pt-2 mb-0 sez3'>
                <p className='ms-3 mb-0' style={{fontSize : '0.8em'}}> <FlagFill className='me-3'/>I miei elementi</p>
            </div>
        </div>
        <div className='mt-3 rounded border bg-white'>
            <div className='d-flex align-items-center'>
              <div className='d-flex flex-column ms-2 mt-3 mb-3'>
               <a href="#" className='text-decoration-none mb-2 elem1' style={{fontSize : '0.8em'}}>Gruppi</a>
               <a href="#" className='text-decoration-none mb-2 elem1' style={{fontSize : '0.8em'}}>Eventi</a>
               <a href="#"className='text-decoration-none elem1' style={{fontSize : '0.8em'}}>Hashtag seguiti</a>
              </div>
              <div>
               <Plus className='ms-5 fs-4 elem2'/>
              </div>
            </div>
            <div className='border-top pt-2 pb-2 d-flex justify-content-center sez4'>
                <p className='mb-0 text-secondary' style={{fontSize : '0.8em'}}>Scopri di più </p>
              </div>
            
        </div>
    </>
)
}

export default LeftSidebar