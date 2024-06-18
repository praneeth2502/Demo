import React from "react";
import bg_img from './Images/task.png'
import './Home.css'


export default function HomeComponent(){
    return(
        <div className="home">
            <img src={bg_img} className="img-bg"/> 
            <div className="home-content">
                    <h2>Check your tasks Buddy 😎</h2>
            </div>
        </div>
    )
}