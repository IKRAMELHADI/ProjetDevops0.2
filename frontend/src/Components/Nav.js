import React from 'react';
import {Link 
}from 'react-router-dom';
const Nav=()=>{
    return(
        <div>
            <ul className='nav'>

                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Profile</Link></li>
                <li><Link to="/Logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>

            </ul>
        </div>
    )

}
export default Nav;