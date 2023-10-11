import React from 'react'
import { Link } from 'react-router-dom';

function IshopHome() {
  return (
    <div>

        <h2>Shopping Home</h2>
        <Link to="/register">New User Register</Link>
        <span> | </span>
        <Link to="/login">Existing User</Link>
    </div>
  )
}

export default IshopHome;