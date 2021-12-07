import React from "react";
import { Link } from "react-router-dom";

const logo = "https://i.ibb.co/x3Bd4Wg/Logo-Makr-8ot-Pkd.png";

const Header = () => {
    return (
        <header className="header">
            <div className="logo_container">
                <img src={logo} alt="logo"></img>
            </div>
            <ul className="navigation">
                <Link to={"/"}>  <li>Home</li></Link>
                <Link to={"/meals"}>  <li>Meals</li></Link>
                <Link to={"/meals/addmeal"}>  <li>Become a Host</li></Link>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;