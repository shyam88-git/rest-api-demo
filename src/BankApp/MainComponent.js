import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import BankAppHome from './BankAppHome';
import PersonalLogin from './Personal/PersonalLogin';
import PersonalRegister from './Personal/PersonalRegister';
import NriLogin from './NRI/NriLogin';
import NriRegister from './NRI/NriRegister';
import PersonalHome from './Personal/PersonalHome';
import NRIHome from './NRI/NRIHome';

function MainComponent() {
  return (
    <div>

        <BrowserRouter>
            <Routes>
             <Route path="/" element={<BankAppHome/>}>


                <Route path="personal" element={<PersonalHome/>}>

                <Route path="personallogin" element={<PersonalLogin/>}/>
                <Route path="personalregister" element={<PersonalRegister/>}/>

                 </Route>

                 <Route path="nri" element={<NRIHome/>}>

                 <Route path="nrilogin" element={<NriLogin/>}/>
                    <Route path="nriregister" element={<NriRegister/>}/>
                 </Route>
                
             </Route>

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MainComponent;