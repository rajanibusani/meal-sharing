import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';


const About = () => {
    const [searchMeal, setSearchMeal] = useState("");
    const [meals, setMeals] = useState([]);
    const [display, setDisplay] = useState(false)
    useEffect(() => {
        if (searchMeal) {
            fetch(`http://localhost:5000/api/meals?title=${searchMeal}`)
                .then(res => res.json())
                .then(data => {
                    setMeals(data)
                })
        }
    }, [searchMeal])
    const onClick = (title) => {
        setSearchMeal(title)
        setDisplay(true)

    }


    return <div className="about-page">
        <div className="about">
            <h1>Welcome!</h1>
            <h3>We're glad to see you'd like to join the Meal Sharing family!</h3>
            <h4>By joining Meal Sharing, you'll unlock a world of opportunities to taste different foods and
                       create unforgettable moments.</h4>
            <div>
                <div className="search_input_box">
                    <FaSearch />
                    <input className="search_input" type="text" placeholder="search meal..." value={searchMeal} onChange={(e) => setSearchMeal(e.target.value)} />
                </div>

                {meals && meals.map(meal => {
                    return (
                        <div className="search_meal_list">
                            { !display ?
                                <div>
                                    <li className="search_meal" onClick={() => onClick(meal.title)}>{meal.title}</li>
                                </div>
                                : <div key={meals[0].id} className="search_meal_box">
                                    <h4><span>Meal Information</span></h4>
                                    <h4 ><span>Meal Title:</span> {meals[0].title}</h4>
                                    <h4><span>Location: </span> {meals[0].location}</h4>
                                    <Link to={`meals/${meals.id}`}><button>More Details...</button></Link>
                                </div>
                            }
                        </div>
                    )
                })
                }
            </div>
        </div>
    </div>
}
export default About;