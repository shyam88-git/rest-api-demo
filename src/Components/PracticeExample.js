import React from 'react';
import axios from 'axios';

import { useFormik} from 'formik';
function PracticeExample() {
    


    let formik=useFormik({

        initialValues:{

            UserId:'',
            UserName:'',
            Password:'',
            Age:0,
            Mobile:'',
            Suscribed:true,
        },
        onSubmit:values=>{

            axios.post('http://localhost:5000/registeruser', values);
            alert("Register Successfully");
        }

    });
    

     

        
             
    
     
  return (
    <div className='container-fluid'>

        <h2>User Details:</h2>
        <form onSubmit={formik.handleSubmit}>

            <dl>
                <dt>UserId</dt>
                <dd><input type="text" name="UserId" value={formik.values.UserId} onChange={formik.handleChange} /></dd>
                <dt>UserName</dt>
                <dd><input type="text" name="UserName" value={formik.values.UserName} onChange={formik.handleChange}/></dd>
                <dt>Password</dt>
                <dd><input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange}/></dd>
                <dt>Age</dt>
                <dd><input type="number" name="Age" value={formik.values.Age} onChange={formik.handleChange}/></dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" value={formik.values.Mobile} onChange={formik.handleChange}/></dd>
                <dt>Suscribed</dt>
                <dd className='form-switch'><input type="checkbox" className='form-check-input' name="Suscribed" checked={formik.values.Suscribed} onChange={formik.handleChange}/>Yes</dd>
                
            </dl>
            <button type='submit' className='btn btn-primary'>Register</button>
        </form>

    </div>
  )
}

export default PracticeExample;