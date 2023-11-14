import Sole24 from '../SidebarImgs/sole24ore.png'
import Pubblicità from '../SidebarImgs/pubblicità.png';
import CercoLavoro from '../SidebarImgs/cercolavoro.png';
import { useEffect, useState } from 'react';
import { SendFill, Lock, PersonPlusFill, Plus} from 'react-bootstrap-icons';
import '../Sidebar.css'

const Sidebar = function () {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://striveschool-api.herokuapp.com/api/profile/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMjk2MGM1NWU3ZTAwMThmODNjNWEiLCJpYXQiOjE2OTk4ODMzNjAsImV4cCI6MTcwMTA5Mjk2MH0.pq7YydePhZQPZHlncuZcOABkR3_X_Lma7N_cam5LwTQ',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        }
        return response.json();
      })
      .then(data => {
        setProfileData(data.slice(0, 10)); 
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='mt-4'>
        <img src={Pubblicità} alt="pubblicità" className='rounded border-dark-subtle w-100' />
      </div>
      {profileData.length > 0 && (
      <div className='mt-2 bg-white rounded border border-light-subtle w-100'>
      
        <h5 className='mt-3 ms-3'>Altri Profili consultati</h5>
       
         <div className='d-flex ms-3 mt-3 '>
            <img src={profileData[0].image} alt='immagine del profilo' style={{width:'2.6em', height:'2.6em', borderRadius:'30px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[0].name} ${profileData[0].surname}`}</a>
             <p className='mb-1'>{profileData[0].title}  ciaociao</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><SendFill className='me-2'/>Messaggio</button>
            </div>
          </div>
          <div className='d-flex ms-3 '>
            <img src={profileData[1].image} alt='immagine del profilo' style={{width:'2.6em' , height:'2.6em', borderRadius:'100px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[1].name} ${profileData[1].surname}`}</a>
             <p className='mb-1'>{profileData[1].title}</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><Lock className='me-2'/>Messaggio</button>
            </div>
          </div>
          <div className='d-flex ms-3 '>
            <img src={profileData[2].image} alt='immagine del profilo' style={{width:'2.5em' , height:'2.6em', borderRadius:'30px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[2].name} ${profileData[2].surname}`}</a>
             <p className='mb-1'>{profileData[2].title}</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><SendFill className='me-2'/>Messaggio</button>
            </div>
          </div>
         <div className='d-flex ms-3'>
            <img src={profileData[3].image} alt='immagine del profilo' style={{width:'2.6em' , height:'2.6em', borderRadius:'30px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[3].name} ${profileData[3].surname}`}</a>
             <p className='mb-1'>{profileData[3].title}</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><SendFill className='me-2'/>Messaggio</button>
            </div>
          </div>
          <div className='d-flex ms-3 '>
            <img src={profileData[4].image} alt='immagine del profilo' style={{width:'2.6em' , height:'2.6em', borderRadius:'30px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[4].name} ${profileData[4].surname}`}</a>
             <p className='mb-1'>{profileData[4].title}</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><Lock className='me-2'/>Messaggio</button>
            </div>
           </div>
          <div className='d-flex justify-content-center  border-top border-light-subtle mostra'>
                <p className='mb-2 mt-2'>Mostra tutto</p>
            </div>
     </div>
      )}
      {profileData.length > 0 && (
     <div className='mt-2 bg-white rounded border border-light-subtle w-100'>
        <h5 className='mt-3 ms-3 mb-0'>Persone che potresti conoscere</h5>
        <p className='ms-3'>Dalla scuola o università</p>
         <div className='d-flex ms-3 mt-3 '>
            <img src={profileData[5].image} alt='immagine del profilo' style={{width:'2.6em', height:'2.6em', borderRadius:'30px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[5].name} ${profileData[5].surname}`}</a>
             <p className='mb-1'>{profileData[5].title}</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><PersonPlusFill className='me-2'/>Collegati</button>
            </div>
          </div>
          <div className='d-flex ms-3 '>
            <img src={profileData[6].image} alt='immagine del profilo' style={{width:'2.6em' , height:'2.6em', borderRadius:'100px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[6].name} ${profileData[6].surname}`}</a>
             <p className='mb-1'>{profileData[6].title}</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><PersonPlusFill className='me-2'/>Collegati</button>
            </div>
          </div>
          <div className='d-flex ms-3 '>
            <img src={profileData[7].image} alt='immagine del profilo' style={{width:'2.5em' , height:'2.6em', borderRadius:'30px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[7].name} ${profileData[7].surname}`}</a>
             <p className='mb-1'>{profileData[7].title}</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><PersonPlusFill className='me-2'/>Collegati</button>
            </div>
          </div>
         <div className='d-flex ms-3'>
            <img src={profileData[8].image} alt='immagine del profilo' style={{width:'2.6em' , height:'2.6em', borderRadius:'30px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[8].name} ${profileData[8].surname}`}</a>
             <p className='mb-1'>{profileData[8].title}</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><PersonPlusFill className='me-2'/>Collegati</button>
            </div>
          </div>
          <div className='d-flex ms-3 '>
            <img src={profileData[9].image} alt='immagine del profilo' style={{width:'2.6em' , height:'2.6em', borderRadius:'30px'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>{`${profileData[9].name} ${profileData[9].surname}`}</a>
             <p className='mb-1'>{profileData[9].title}</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'8em'}}><PersonPlusFill className='me-2'/>Collegati</button>
            </div>
           </div>
          <div className='d-flex justify-content-center  border-top border-light-subtle mostra'>
                <p className='mb-2 mt-2'>Mostra tutto</p>
            </div>
     </div>
      )}
      {profileData.length > 0 && (
     <div className='mt-2 bg-white rounded border border-light-subtle w-100'>
        <h5 className='mt-3 ms-3 mb-0'>Potrebbe interessarti</h5>
        <p className='ms-3'>Pagine per te</p>
         <div className='d-flex ms-3'>
            <img src={CercoLavoro} alt='logo' style={{width:'2.6em', height:'2.6em'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>CercoLavoro.com</a>
             <p className='mb-1 me-3'>Tecnologia, informazioni e internet</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'6em'}}><Plus className='me-1'/>Segui</button>
            </div>
          </div>
          <div className='d-flex ms-3 '>
            <img src={Sole24} alt='immagine del profilo' style={{width:'2.6em' , height:'2.6em'}} />
            <div className='ms-3'>
             <a  href='#h' className='fw-bold text-decoration-none text-black titol'>Il Sole 24 0re</a>
             <p className='mb-1 me-3'>Editoria: libri e pubblicazioni periodiche</p>
             <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{width:'6em'}}><Plus className='me-1'/>Segui</button>
            </div>
           </div>
          <div className='d-flex justify-content-center  border-top border-light-subtle mostra'>
                <p className='mb-2 mt-2'>Mostra tutto</p>
            </div>
     </div>
      )}
      <div className='mt-2'>
        <img src={Pubblicità} alt="pubblicità" className='rounded border-dark-subtle w-100' />
      </div>
    </>
  );
};

export default Sidebar;