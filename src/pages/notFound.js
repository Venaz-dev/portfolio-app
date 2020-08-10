import React from 'react'
import { Link } from 'react-router-dom'
import "./notFound.style.css"



export default function NotFound(){

    return(
        <div>
            <div className="notfound-container">
                <img src={require("../assets/notfoundimage.gif")}></img>
                <Link to="/" className="home-button">
                    <button>Go to Home</button>
                </Link>
            </div>
        </div>
    )
}