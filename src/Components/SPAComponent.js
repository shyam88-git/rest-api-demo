import React from 'react'
import { BrowserRouter ,Routes, Route,Link } from 'react-router-dom';

function Html(){
 return(

    <>
    <main>
        <h2>Html</h2>
     <p>It is a mark up language</p>
    </main>

    </>
 )
}
    

function CSS(){

    return(

        <>
        <main>
     <h2>CSS</h2>
     <p>IT is a css language</p>
     </main>
        </>
    )

}

function JavaScript(){

    return(
        <>
        <main>
    <h2>Home</h2>
    <p>Tutorial Home</p>
</main>
        </>
    )
}

function SPAComponent() {
  return (
    <div className='container-fluid'>

        <BrowserRouter>
            <nav>

                <ul>
                   <li> <Link to="/html">HTML</Link></li>
                   <li> <Link to="/css">CSS</Link></li>
                   <li> <Link to="/javascript">JavaScript</Link></li>
                </ul>
            </nav>
        

        <hr/>
   
        <Routes>
            <Route path="html" element={
                <Html/>
                
            }/>

            <Route path="css" element={
                <CSS/>
            }/>

            <Route path="javascript" element={

               <JavaScript/>
            }/>

            <Route path="*" element={
                <main>
                    <h2>Inbox</h2>
                    <p>Tutorial inboxes</p>
                </main>
            }/>


            <Route path="javascript" element={

                <main>
                    <cod>Not found page:your requested</cod>
                </main>
            }/>


        </Routes>
         

        </BrowserRouter>
    </div>
  )
}

export default SPAComponent;