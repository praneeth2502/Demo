import React from "react";
import './NavBar.css';
import { Link, json, useNavigate } from "react-router-dom";
import logout from './Images/logout.jpg'

export default function Navbar(){

    const navigate = useNavigate();
    const isAdmin = JSON.parse(sessionStorage.getItem("isAdmin"));
    var userId = JSON.parse(sessionStorage.getItem("userId"));

    const goToSignUp = () => {
        navigate('/register');
    };

    function logout(){
        var confirmed = window.confirm("Are you sure you want to log out?");
        if(confirmed)
        {
            sessionStorage.clear();
            window.location.reload();
        }
    }

    return(
        <nav className="navbar">
            <ul>
                {!isAdmin && <li><Link to='/home' className="nav-link">Task Manager</Link></li>}
                {isAdmin && <li><Link to='/admin' className="nav-link">Task Manager</Link></li>}
                {<>
                    <li><Link to='admin/add-member' className="nav-link">Add tasks</Link></li>
                    <li><Link to='admin/get-members' className="nav-link">Get tasks</Link></li>
                   </>
                }
                {isAdmin == undefined && <li><Link to='/register' className="nav-link" id={` ${isAdmin ? 'sign-up' : 'sign-up2'}`}>SignUp</Link></li>}
                {userId && <li><Link to='user/profile' className="nav-link">Profile</Link></li>}
                {userId && <button className="nav-link" id="log-icon" onClick={logout} >Logout</button>}
            </ul>
        </nav>
    );
}