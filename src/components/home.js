import React from 'react'
import welcome from "../assets/welcome.jpg";
import "./home.css";

// welcome page
const Home = () => {
    return (
        <div>
            <h1>Welcome To The Solent Study Skills & Well-Being App</h1>
            <img src={welcome} className="welcome-page" alt="students at computer"/>
        </div>
    )
}

export default Home
