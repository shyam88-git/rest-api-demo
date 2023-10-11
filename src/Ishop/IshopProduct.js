import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function IshopProduct() {

    const[category,setCategory]=useState();
    const[products,setProducts]=useState([]);

    let params=useParams();
    useEffect(()=>{


        setCategory(params.category);

        axios.get("http://localhost:5000/getProducts")
             .then(response=>{

                setProducts(response.data);
             })
        

    });
  return (
    <div className='container-fluid'>
        <h2>{category}</h2>

        

            {


                    products.filter(item=>item.category===category).map(product=>(

                        <div>


                            <img src={product.image} alt='product'width="100px" height="90px"/>
                            <div className='card-header' style={{height:'50px'}}>
                                <h6><Link to={"/details/"+product.id}>{product.title}</Link></h6>
                                
                            </div>
                        </div>



                    )




                        
                    

                       
                    )
            }
        
      
        <div>
            <Link to="/dashboard">Back to Categories</Link>
        </div>
        
        </div>
  )
}

export default IshopProduct;