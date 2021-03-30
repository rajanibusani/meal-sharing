import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stars from "./Stars";
import { FaSearch } from 'react-icons/fa';

const GetMeals = () => {
    const [meals, setMeals] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [searchMeal, setSearchMeal] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    //Images for meals
    const images = ["https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6691965.jpg",
        "https://images.media-allrecipes.com/userphotos/3428546.jpg",
        "https://res.cloudinary.com/hksqkdlah/image/upload/39460_sfs-shrimp-tacos-reshoot-5.jpg",
        "https://photo.foodgawker.com/wp-content/uploads/2020/01/3537241.jpg",
        "https://www.rachaelraymag.com/.image/t_share/MTQ1ODk5MTg3NTY3ODYzNTAx/corn-risotto-with-roasted-shrimp-102520808.jpg",
        "https://static.toiimg.com/thumb/61879694.cms?width=1200&height=1200",
        "https://onlinepasale.com/wp-content/uploads/2020/08/chicken-steam-momo-400x330-1-1.jpg",
        "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg"]
    useEffect(() => {
        //fetching all meals      
        if (searchMeal == "") {
            fetch("/api/meals")
                .then(res => res.json())
                .then(meals => {
                    setIsLoading(false)
                    setMeals(meals);
                })
        } else {
            fetch(`/api/meals?title=${searchMeal}`)
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)
                    // console.log(data);
                    setMeals(data)
                })
        }
        //fetching all reviews to diaplay stars
        fetch("/api/reviews")
            .then(res => res.json())
            .then(meals => {
                const reviews = meals.map(meal => {
                    return {
                        mealid: meal.meal_id,
                        stars: meal.stars
                    }
                })
                setReviews(reviews)
            })

    }, [searchMeal])



    return (
        <div className="meals-container">
            {isLoading ? <div>LOADING....</div> :
                <>
                    <div className="search_input_box">
                        <FaSearch />
                        <input className="search_input" type="text" placeholder="search meal..." value={searchMeal} onChange={(e) => setSearchMeal(e.target.value)} />
                    </div>

                    <div className="meals_display">
                        {meals.length > 0 ? meals.map((meal, i) => {
                            let imageSrc = "";
                            let stars = 0;
                            //adding random image for the new meals
                            if (images[i]) {
                                imageSrc = images[i]
                            } else {
                                imageSrc = "https://panlasangpinoy.com/wp-content/uploads/2016/09/Ginataang-Gulay-500x485.jpg";
                            }
                            //adding review in meals
                            reviews.filter(review => {
                                if (review.mealid === meal.id) {
                                    if (stars === 0) {
                                        stars = review.stars;
                                        return stars;
                                    } else {
                                        stars = Math.ceil(stars + review.stars) / 2;
                                        return (stars)
                                    }
                                }
                            }
                            )
                            return <div key={meal.id} className="meal_box">
                                <div className="meal_image">
                                    <img src={imageSrc}></img>
                                </div>
                                <div className="meal_title">
                                    <h4 >{meal.title}</h4>
                                </div>
                                <div className="description">
                                    <h4> Price: {meal.price}DKK</h4>
                                    <h4> Location: {meal.location}</h4>
                                    <h5>{stars ? <Stars stars={stars} /> : "No Reviews yet"}</h5>
                                    <Link to={`meals/${meal.id}`}><button>More Details...</button></Link>
                                    <div>
                                        <Link to={`meals/${meal.id}/addreview`}><button>Add Review</button></Link>
                                    </div>
                                </div>
                            </div>
                        })
                            : <h4>No Meals Found</h4>
                        }
                    </div>
                </>
            }
            <div className="host">
                <h3 >Intrested To Become a Host?</h3>
                <Link to={"meals/addmeal"}><span >Click Here</span> To Add a meal here</Link>
            </div>

        </div>
    )
}
export default GetMeals;


