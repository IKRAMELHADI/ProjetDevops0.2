import React from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/SignUp')
    }
    return (
        <div>
            
            <img 
            alt='logo'
            className="logo"
            src='https://media.istockphoto.com/id/899347890/fr/vectoriel/ic%C3%B4ne-de-rapport-de-graphique-en-ligne.jpg?s=612x612&w=0&k=20&c=3gGsCep1nlBglOoVb7n5sqmUzQF6W45qPPxI64EhIe0='/>
            {
                auth ?

                    <ul className='nav'>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update">Update Profile</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li> <Link onClick={logout} to="/SignUp"> Logout({JSON.parse(auth).name}) </Link> </li>
                    </ul>
                    :
                    <ul className='nav nav-right'>
                        <li> <Link to="/SignUp">Sign Up</Link> </li>
                        <li><Link to="/login">Login</Link></li></ul>
            }



        </div>
    )

}
export default Nav;