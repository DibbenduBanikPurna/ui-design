import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { Button } from '@mui/material';

const Login = () => {
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
       

    }

    return (
        <div className='login'>
                
            
                <br/>
              
            <div className='col-md-3 m-auto border border-primary bg-dark text-light p-5'>
                    <p className='text-center mt-5'>Log-in</p>
                   
                    <form onSubmit={handleLogInSubmit}>
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
    );
};

export default Login;