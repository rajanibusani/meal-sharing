import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";

//FaFacebookF

const Footer = () => {

    return (<footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company info</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>

                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><Link to={"/meals/addmeal"}>  Become a Host</Link></li>
                        <li><Link to={"/meals/addmeal"}> How it works</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4><a id="contact"></a>contact us</h4>
                    <ul>
                        <li>Addresss: <p>123 vesterbrogade</p>
                            <p>1630</p>
                            <p>Copenhagen</p>
                        </li>
                        <li>Ph : +45 12 34 56 78</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
            </div >

            <div className="row-2"><p>@copyright | website developed by
                <a href="https://github.com/rajanibusani/meal-sharing" target="_blank"> RajaniBusani</a>
            </p></div>
        </div >
    </footer >)
}
export default Footer;