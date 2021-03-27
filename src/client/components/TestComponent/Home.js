import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return <div className="about-page">
        <div className="about">
            <h1>Welcome!</h1>
            <h3>We're glad to see you'd like to join the Meal Sharing family!</h3>
            <h4>By joining Meal Sharing, you'll unlock a world of opportunities to taste different foods and
 create unforgettable moments.</h4>

            <Link to={"/meals"}> <button >Get All Meals</button></Link>
        </div>
    </div>
}
export default About;