import React from 'react';
import {Link} from "react-router-dom";

import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






function IshopRegister() {
    let navigate=useNavigate();
    const formik=useFormik({

        initialValues:{

            UserId:"",
            UserName:"",
            Password:"",
            Age:0,
            Mobile:"",
            Suscribed:true,
        },

        onSubmit:values=>{

            axios({

                method:'POST',
                url:"http://localhost:5000/registeruser",
                data:values
            });
            alert("Register successfull");
            navigate("/login");
        }
    })

    
  return (
    <div className='container-fluid'>
        <h2>Register New User</h2>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>UserId</dt>
                <dd><input type="text" name="UserId" onChange={formik.handleChange} value={formik.values.UserId}/></dd>


                <dt>UserName</dt>
                <dd><input type="text" name="UserName" onChange={formik.handleChange} value={formik.values.UserName} /></dd>


                <dt>Password</dt>
                <dd><input type="text" name="Password"  onChange={formik.handleChange} value={formik.values.Password}/></dd>


                <dt>Age</dt>
                <dd><input type="number" name="Age" onChange={formik.handleChange} value={formik.values.Age}/></dd>


                <dt>Mobile</dt>
                <dd><input type="number" name="Mobile" onChange={formik.handleChange} value={formik.values.Mobile}/></dd>


                <dt>Suscribed</dt>
                <dd className='form-switch'><input className='form-check-input' onChange={formik.handleChange} type="checkbox" name="Suscribed" checked={formik.values.Suscribed}/>Yes</dd>
            </dl>

            <button className='btn btn-primary'>Register</button>
            <br/>
            <Link to="/login"> Already Have An Account?</Link>
        </form>
    </div>
  )
}

export default IshopRegister;