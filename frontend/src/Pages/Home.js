import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../Assets/student_homepage.svg'
import Navbar from '../Components/Navbar';
import Button from '@material-ui/core/Button';
import useStyles from '../Components/Styles';


const App = () => {
  const navigate = useNavigate()
  const classes = useStyles()
  const data = JSON.parse(localStorage.getItem("users"));
  return (
    <div className='main_container'>
      <Navbar />
      <div className='page-container'>
        <div className='home-header'>
          <h1>Tutor-Swan</h1>
          <h3 style={{ 'textDecoration': 'underline' }}>Evaluate your grades</h3>
          {
            data?   <div className='register'>
            <Button variant='Text' onClick={() => navigate('/register')} className={classes.btnReg}>Get a service</Button>
          </div>
          :<div className='register'>
          <Button variant='Text' onClick={() => navigate('/register')} className={classes.btnReg}>Register Now</Button>
        </div>
          }
          
        </div>
        <img src={image1} alt="student" className='std-img' />
      </div>

    </div>
  );
};

export default App;