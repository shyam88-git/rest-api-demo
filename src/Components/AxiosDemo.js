import React, { useEffect, useState } from 'react';
import axios from 'axios'

function AxiosDemo() {

    const[users,setUsers]=useState([]);

    useEffect(()=>{

        axios.get("http://localhost:5000/getusers")
        .then(function(response){

            setUsers(response.data);
        }).catch(function(ex){

            console.log(ex);
        })


    },[]);
  return (
    <div className='container-fluid'>


        <h2>Users</h2>
        <ol>
        {

            users.map(user=>(
                <li key={user.id}>{user.UserId}</li>


            ))
        }

</ol>
        

    </div>
  )
}

export default AxiosDemo;