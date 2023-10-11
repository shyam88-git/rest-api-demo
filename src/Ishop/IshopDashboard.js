import React, { useEffect, useState } from 'react';
import useCookies from 'react-cookie/cjs/useCookies';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


function IshopDashboard() {
    let navigate=useNavigate();
    const[cookies,setCookies,removeCookies]=useCookies();
    const[UserId,setUserId]=useState();
    const[categories,setCategory]=useState([]);


    function loadCategory(){


      axios.get("http://localhost:5000/getcategories")
           .then(response=>{

              setCategory(response.data);
           })
    }
   
     useEffect(()=>{

        if(cookies.UserId===undefined){

            navigate("/login");
        }

        else{

            setUserId(cookies['UserId']);
            loadCategory();
           
        }
     })


      
     function handleSignOut(){

        removeCookies("UserId");
        navigate("/login");
     }

     
     
  return (
    <div> User Dashboard  {UserId}  
     - <button className='btn btn-link' onClick={handleSignOut}>Signout</button>
     
     <h2>Product List</h2>

     <ol>
      
        {

            categories.map((item)=>(

               <li key={item.category.toLowerCase()}> <Link to={"/products/"+item.category}>{item.category.toUpperCase()}</Link></li>
            ))

        }
     </ol>
     
     
     </div>
   
  )
}

export default IshopDashboard;