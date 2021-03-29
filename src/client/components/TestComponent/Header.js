import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo_container">
                <img src="src/client/assets/images/logo.png" alt="logo"></img>
            </div>
            <ul className="navigation">
                <Link to={"/"}>  <li>Home</li></Link>
                <Link to={"/meals"}>  <li>Meals</li></Link>
                <Link to={"/meals/addmeal"}>  <li>Become a Host</li></Link>
                {/* <li><Link href="#contact">Contact</Link></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;