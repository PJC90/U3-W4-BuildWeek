import Sole24 from '../SidebarImgs/sole24ore.png';
import Pubblicità from '../SidebarImgs/pubblicità.png';
import CercoLavoro from '../SidebarImgs/cercolavoro.png';
import { useEffect, useState } from 'react';
import { SendFill, PersonPlusFill, Plus} from 'react-bootstrap-icons';
import '../Sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = function () {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://striveschool-api.herokuapp.com/api/profile/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM",
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data)
        setProfileData(data.slice(0, 10)); 
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
    };

    fetchData();
  }, []);

  const Sezione1 = (start, end) => {
    return profileData.slice(start, end).map((profile, index) => (
      <div className='d-flex ms-3' key={index}>
        <img src={profile.image} alt='immagine del profilo' style={{ width: '2.6em', height: '2.6em', borderRadius: '30px' }} />
        <div className='ms-3'>
          <Link to={`/profile/${profile._id}`} className='fw-bold text-decoration-none text-black titol'>
            {`${profile.name} ${profile.surname}`}
          </Link>
          <p className='mb-1'>{profile.title}</p>
          <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{ width: '8em' }}>
            <SendFill className='me-2' />
            Messaggio
          </button>
        </div>
      </div>
    ));
  };

  const Sezione2 = (start, end) => {
    return profileData.slice(start, end).map((profile, index) => (
      <div className='d-flex ms-3' key={index}>
        <img src={profile.image} alt='immagine del profilo' style={{ width: '2.6em', height: '2.6em', borderRadius: '30px' }} />
        <div className='ms-3'>
          <Link to={`/profile/${profile._id}`} className='fw-bold text-decoration-none text-black titol'>
            {`${profile.name} ${profile.surname}`}
          </Link>
          <p className='mb-1'>{profile.title}</p>
          <button className='bg-white rounded-pill text-secondary border border-secondary mb-3 bottone' style={{ width: '8em' }}>
            <PersonPlusFill className='me-2' />
            Collegati
          </button>
        </div>
      </div>
    ));
  };


  return (
    <div className='sidebar-component' style={{ display: window.innerWidth < 678 ? 'none' : 'block', minWidth: '300px' }}>
      <div className='mt-4'>
        <img src={Pubblicità} alt="pubblicità" className='rounded border-dark-subtle w-100' />
      </div>
      {profileData.length > 0 && (
        <div className='mt-2 bg-white rounded border border-light-subtle w-100'>
          <h5 className='mt-3 ms-3'>Altri Profili consultati</h5>
          {Sezione1(0, 5)}
          <div className='d-flex justify-content-center border-top border-light-subtle mostra'>
            <p className='mb-2 mt-2'>Mostra tutto</p>
          </div>
        </div>
      )}
      {profileData.length > 0 && (
     <div className='mt-2 bg-white rounded border border-light-subtle w-100'>
        <h5 className='mt-3 ms-3 mb-0'>Persone che potresti conoscere</h5>
        <p className='ms-3'>Dalla scuola o università</p>
        {Sezione2(5, 10)}
          <div className='d-flex justify-content-center border-top border-light-subtle mostra'>
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
  </div>
  );
};

export default Sidebar;