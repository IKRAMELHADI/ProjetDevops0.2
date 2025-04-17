import React from 'react';
import {Link, useNavigate
}from 'react-router-dom';
const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate =useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/SignUp')
    }
    return(
        <div>
            <ul className='nav'>

                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Profile</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                    {
                        auth ? <li> <Link onClick={logout}to="/SignUp"> Logout </Link> </li>
                        :<>
                        <li> <Link to="/SignUp">Sign Up</Link> </li>
                        <li><Link to ="/login">Login</Link></li>
                        </>
                    }

            </ul>
        </div>
    )

}
export default Nav;