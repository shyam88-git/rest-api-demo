import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function BankAppHome() {
  return (
    <div>

        <h2>Bank Home</h2>
        <nav>
            <span><Link to="/personal"> Personal</Link></span>&nbsp;
            <span>|</span> &nbsp;
            <span><Link to="/nri"> NRI</Link></span>
        </nav>

        <hr/>
        <Outlet/>
    </div>
  )
}

export default BankAppHome;