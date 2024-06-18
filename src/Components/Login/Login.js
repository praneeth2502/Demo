import React,{useState} from "react";
import './Login.css'
import bg_img from '../Home/Images/task.png'
import { useNavigate } from "react-router-dom";

export default function Login(){

    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");
    var [loginUser,setLoginUser] = useState({})
    
    var navigate = useNavigate();


    var user = {};
    function logIn(e)
    {

    }

    function login(e)
    {
        e.preventDefault();
        user.username = username;
        user.password = password;

        var RequestOption = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
          }

          const params = new URLSearchParams({
            username: username,
            password : password
          });
      
          fetch(`https://localhost:7999/api/Users/Login?${params.toString()}`,
          RequestOption)
          .then(res => res.json())
          .then(res => {
            console.log(res)
            sessionStorage.setItem("isAdmin", res.isAdmin);
            sessionStorage.setItem("name", res.username);
            sessionStorage.setItem("userId", res.userId);
            alert("Login Success ✔" + res.username)
            navigate('/admin')
          })
          .catch(err => {
            console.log(err)
            alert("Invalid credentials")
          })
    }

    return(
        <div className="login-page">
            <img src={bg_img} className="img-bg"/> 
            <div className="form-container-login">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" onClick={logIn}>Login</button>
                    <br/> <br/>
                    <p>Already a user, Register <span className="l-text" onClick={()=>navigate('/register')}>here</span> </p>
                </form>
            </div>
        </div>
    )
}