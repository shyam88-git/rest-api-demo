import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function IshopLogin() {
     let navigate=useNavigate();
    const[users,setUsers]=useState([]);
    const[cookies,setCookies,removeCookies]=useCookies();

    const formik=useFormik({

        initialValues:{
            UserId:'',
            Password:'',

        },
        onSubmit:values=>{

            for(var user of users){

                if(user.UserId===values.UserId && user.Password===values.Password){
                  setCookies("UserId",user.UserId);
                   navigate("/dashboard");
                   break;
                }
                else
                {

                    navigate("/error");
                }
            }
         }});

    

    useEffect(()=>{
        axios.get("http://localhost:4000/getusers")
             .then(response=>{

                setUsers(response.data);

                
             })

    },[]);
  return (
    <div className='container-fluid'>
        <form onSubmit={formik.handleSubmit}>

            <h2>Login Page</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" name="UserId" values={formik.values.UserId} onChange={formik.handleChange}/></dd>

                <dt>Password</dt>
                <dd><input type="text" name="Password" values={formik.values.Password} onChange={formik.handleChange}/></dd>
            </dl>

            <button type="submit" className='btn btn-primary'>Login</button>
        </form>
    </div>
  )
}

export default IshopLogin;