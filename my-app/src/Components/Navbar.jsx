import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Terms">Terms</Link>
            </li>
        </ul>
        </nav>
    );
}

export default Navbar; 