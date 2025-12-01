import React from "react";
import logo from "/images/logo.png"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" width="100" />
            </div>

            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>

            <div className="btn">
                <button className="login">Login</button>
                <button className="signin">sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
