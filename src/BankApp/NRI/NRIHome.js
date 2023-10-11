import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function NRIHome() {
  return (
    <div>
        <h2>NRI Home</h2>
        <ul>
            <li> <Link to="nrilogin">Login</Link></li>
            <li><Link to="nriregister">Home</Link></li>
        </ul>
        <hr/>
        <Outlet/>
    </div>
  )
}

export default NRIHome