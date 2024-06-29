import { TextField } from "@material-ui/core";
import Navbar from "../Components/Navbar";
import useStyles from '../Components/Styles';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as LoginSlice } from "../store/authSlice";

import authService from "../Service/authService";

const Register = () => {
   const dispatch = useDispatch();
   const classes = useStyles()
  const [data,setData]=useState({
        first_name:'',
        last_name:'',
        email:'',
        pwd:'',
        institute_name:'',
        role:'',
        username:''  })
        
      const handleChange=(event)=>{
         const {name,value}=event.target;
         setData({
            ...data,[name]:value
         })
      }
      const handleSubmit = async (e) => {
        try {
        
          const response = await authService.signUpService(data);
          console.log("res",await response);
          if (response !== null || response !== undefined) {
            dispatch(LoginSlice(response));
            console.log(response.message);
          }
        } catch (error) {
          console.log(error);
        }

    }
    return (
        <div className='main_container'>
            <Navbar />
            <div className="form">
                <h1 style={{ color: '#08823F', padding: '20px' }}>Registration Form</h1>
                <TextField className={classes.textField} id="standard-required" label="First Name" variant="standard" name="first_name" onChange={handleChange} />
                <TextField className={classes.textField} id="standard-required" label="Last Name" variant="standard" name="last_name" onChange={handleChange} />
                <TextField className={classes.textField} id="standard-required" label="Institute Name" variant="standard"name="institue_name" onChange={handleChange} />
                <TextField className={classes.textField} id="standard-required" label="Role " variant="standard"  name="role" onChange={handleChange}/>
                <TextField className={classes.textField} id="standard-required" label="E-Mail" variant="standard" name="email" onChange={handleChange}/>
                <TextField className={classes.textField} id="standard-required" label="Username" variant="standard" name="username" onChange={handleChange} />
                <TextField className={classes.textField} id="standard-required" label="Password" type="password" variant="standard" name="pwd" onChange={handleChange} /> <br/>
                <br/>
                <Button variant='Text' className={classes.btnReg} onClick={handleSubmit}>Register Now</Button>
            </div>
        </div>
    )
}


export default Register