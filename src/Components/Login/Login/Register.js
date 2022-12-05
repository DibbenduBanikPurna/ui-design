import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';



const Register = () => {
    const [loginData, setLoginData] = useState({})
    

 


  
    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)
        

    }
    const handleLogInSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)

        if (loginData.password !== loginData.re_password) {
            alert("Your password did not match!!")
            return;
        }
      
    }
    return (
      
        <div className='row'>
            <div className='col-md-5 m-auto mt-5'>
                <div className='card'>
                    <div className='card-body'>
                    <h4 className='text-center'>Register</h4>
                    
                    <form onSubmit={handleLogInSubmit}>
                    <label>User-Name</label>
                        <input name="email" type="text" className='form-control' onChange={handleChange}  />
                    <label>Email</label>
                        <input name="email" type="email" className='form-control' onChange={handleChange}  />
                        <label>Password</label>
                        < input name="password" className='form-control' onChange={handleChange} id="standard-basic" type="password"  />
                        <br/>
                        <button className='form-control btn btn-success' type="submit" variant='contained'>LOGIN</button>

                        <Link to="/register">  <Button color="inherit">NEW USER?PLEASE REGISTER</Button> </Link>
                       
                       

                    </form>
                  
                    </div>
                </div>
               
              
            </div>

          
        </div>

  
    );
};

export default Register;