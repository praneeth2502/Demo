import React, {useState} from "react";
import './Register.css'
import bg_img from '../Home/Images/task.png'
import { Navigate, useNavigate } from "react-router-dom";

export default function Register(){

    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");
    var [confirmPassword, setConfirmPassword] = useState("");
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [isAdmin, setIsAdmin] = useState(false);

    var navigate = useNavigate();


    var user = {};

    function register(e)
    {
        e.preventDefault();
        user.username = username;
        user.password = password;
        user.email = email;
        user.isAdmin = isAdmin;

        var RequestOption = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
          }
      
          fetch("https://localhost:7999/api/Users/AddUser", RequestOption)
          .then(res => res.json())
          .then(res => {
            console.log(res)
            alert("User registered successfully")
            navigate('/login')
          })
          .catch(err => {
            console.log(err)
            alert("User already exists")
          })
    }
   

    return(
        <div className="register-page">
            <img src={bg_img} className="img-bg"/> 
            <div className="form-container">
                <h2>Register</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <button type="submit" onClick={register}>Register</button>
                    <br/> <br/>
                    <p>Already a User, Go to <span className="l-text" onClick={()=>navigate('/login')}>Login</span> </p>
                </form>
            </div>
        </div>
    )
}