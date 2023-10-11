import React, { useEffect, useState, } from 'react';
import $ from 'jquery';

import {  useFormik } from 'formik';



function UserLogin() {
    const[users,setUsers]=useState([]);
    const[userError,setUserError]=useState('');

    useEffect(()=>{

        $.ajax({

            method:"GET",
            url:"http://localhost:4000/getusers",
            success:function(response){

                setUsers(response);

                
            }
        })
    })

    

    

const formik=useFormik({
    initialValues:{
    UserId:'',
    UserName:'',
    Password:'',
    Age:0,
    Mobile:'',
    Suscribed:true,
},
 onSubmit:values=>{

    $.ajax({

        method:"POST",
        url:"http://localhost:5000/registeruser",
        data:values
    })
    alert("Register Successfully");
 }});


 function verifyUser(e){

    for(var user of users){
        if(user.UserId===e.target.value){

            setUserError("User Id taken -Try again");
            break;
        }

        else
        {

            setUserError('User Id Available');
        }

    }
}
    
  return (
    <div className='container-fluid'>

        <h2>User Details</h2>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>UserId</dt>
                <dd><input type="text"  onKeyUp={verifyUser} onChange={formik.handleChange} name="UserId" value={formik.values.UserId} /></dd>
                <dd> {userError}</dd>

                <dt>UserName</dt>
                <dd><input type="text" onChange={formik.handleChange} name="UserName" value={formik.values.UserName}/></dd>

                <dt>Password</dt>
                <dd><input type="password" onChange={formik.handleChange} name="Password" value={formik.values.Password}/></dd>


                <dt>Age</dt>
                <dd><input type='number'onChange={formik.handleChange} name="Age" value={formik.values.Age}/></dd>

                <dt>Mobile</dt>
                <dd><input type="text"onChange={formik.handleChange} name="Mobile" value={formik.values.Mobile}/></dd>

                <dt>Suscribed</dt>
                <dd  className='form-switch'><input className='form-check-input' type="checkbox" name="Suscribed" checked ={formik.values.Suscribed}/> Yes</dd>
            </dl>

            <button className='btn btn-primary'>Register</button>

        </form>
    </div>
  )
}

export default UserLogin;