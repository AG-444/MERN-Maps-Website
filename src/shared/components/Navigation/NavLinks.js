import React,{ useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import './NavLinks.css';

const Navlinks = props =>{
    const auth = useContext(AuthContext);
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All Users</NavLink>
        </li>
        { auth.isLoggedIn && 
            <li>
                <NavLink to={`/${auth.userId}/places`}>My Places</NavLink>
            </li>
        }
        {auth.isLoggedIn && 
            <li>
                <NavLink to="/places/new">New Place</NavLink>
            </li>
        }
        {!auth.isLoggedIn && 
            <li>
                <NavLink to="/auth">Login / Sign up</NavLink>
            </li>
        }
        {auth.isLoggedIn &&
            <li>
                <button onClick={auth.logout}>Logout</button>
            </li>
        }
    </ul>
};

export default Navlinks;