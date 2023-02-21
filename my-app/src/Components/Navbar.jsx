import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <ul>
            <li>
                <Link to="/pages/Home">Home</Link>
            </li>
            <li>
                <Link to="/pages/About">About</Link>
            </li>
        </ul>
    );
}

export default Navbar; 