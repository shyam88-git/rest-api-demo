import React from 'react'
import { BrowserRouter ,Routes,Route,Link } from 'react-router-dom'
import IshopHome from './IshopHome';
import IshopLogin from './IshopLogin';
import IshopDashboard from './IshopDashboard';
import IshopRegister from './IshopRegister';
import IshopProduct from './IshopProduct';
import IshopProductDetails from './IshopProductDetails';

function IshopIndex() {
  return (
    <div className='container-fluid'>

        <header className='bg-danger text-white text-center p-2 mt-2'>
         <h2 className='bi bi-cart'> IShop-Online Store</h2>

        </header>

        <section className='mt-2 row'>
            <BrowserRouter>
            <nav className='col-3'>
                <div className='mb-2 '>
                    <Link className=" btn btn-danger w-100" to="/home">Home</Link>
                </div>

                <div className='mb-2'>
                    <Link className='btn btn-danger w-100' to="/register">Register</Link>
                </div>

                <div className='mb-2'>
                    <Link className='btn btn-danger w-100' to="/login">Login</Link>
                </div>

                <div className='mb-2'>
                    <Link className='btn btn-danger w-100' to="/dashboard">Dashboard</Link>
                </div>

            </nav>

            <main className='col-9'>

                <Routes>
                <Route path='/' element={<IshopHome/>}/>
                <Route path="home" element={<IshopHome/>}/>
                
                <Route path='login'element={<IshopLogin/>}/>

                <Route path='register' element={<IshopRegister/>}/>

                <Route path='dashboard' element={<IshopDashboard/>}/>
                <Route path="products/:category" element={<IshopProduct/>}/>
                <Route path="details/:id" element={<IshopProductDetails/>}/>

                <Route path="error" element={
                    <main>

                        <h2 className='text-danger'>Invalid User and Password</h2>
                        <Link to="/login">Try Again</Link>
                    </main>
   
                    
                }/>

                

                </Routes>


            </main>

            
            
            
            </BrowserRouter>
        </section>
    </div>
  )
}

export default IshopIndex;