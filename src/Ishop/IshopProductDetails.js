import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function IshopProductDetails() {

    const[product,setProducts]=useState([]);
    let params=useParams();

    useEffect(()=>{

       

        axios.get(`http://localhost:5000/getproduct/${params.id}`)
             .then(response=>{

                setProducts(response.data);
             })
    },[]);

  return (
    <div>

        <h2>Product Details</h2>
        {
            product.map((product)=>(

             <div key={product.id}>


            <dd><img src={product.image} width="100" height="100"/> </dd>
            <dt>{product.title} [{product.id}]</dt>
           
            
            <dt>Price</dt>
            <dd>{product.price}</dd>
            <dt>Rating</dt>
            <dd> <span className='bi bi-star-fill text-success'></span>
              {product.rating.rate}
              <span>[{product.rating.count}]</span>
              <dd>{product.description}</dd>

            </dd>

            <div className='card-footer'>
             <button className='btn btn-danger w-10' id={product.id}>

              <span className='bi bi-cart4'></span> Add to Cart
            </button>&nbsp; &nbsp;

               <Link to={"/products/"+product.category}>Back To Product</Link>

            </div>
              

            </div>

              )  )

        }

        


    </div>
  )
}

export default IshopProductDetails;