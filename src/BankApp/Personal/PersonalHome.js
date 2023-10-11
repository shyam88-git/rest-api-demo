import React from 'react';
import { Link ,Outlet} from 'react-router-dom';

function PersonalHome() {
  return (
    <div>
        <h2>Personal Home</h2>
        <ul>
            <li><Link to=''>Login</Link></li>
            <li><Link to=''>Register</Link></li>
        </ul>
        <hr/>
        <Outlet/>
        <br/>
        <div>
            <Link to='/personal'>Back To Main</Link>
        </div>
    </div>
  )
}

export default PersonalHome