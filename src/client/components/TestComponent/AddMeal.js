import React, { useState } from "react";
import postData from "./postData";


//min date for input
const minDate = () => {
    const day = new Date();
    let dd = day.getDate();
    let mm = day.getMonth() + 1; //January is 0!
    let hh = day.getHours()
    let minutes = day.getMinutes()

    const yyyy = day.getFullYear();
    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;
    hh = hh < 10 ? '0' + hh : hh;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const today = yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + minutes
    return today;
}
//adding Meal Component
const AddMeal = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [maxReservations, setMaxReservations] = useState("");
    const [when, setWhen] = useState("");
    const [price, setPrice] = useState("");

    const setStatesEmpty = () => {
        setTitle("")
        setDescription("")
        setLocation("")
        setMaxReservations("")
        setWhen("")
        setPrice("")
        console.log("emptying")
    }
    //on submit function
    function onSubmit(e) {
        e.preventDefault();
        const meal = {
            title,
            description,
            location,
            when,
            max_reservations: maxReservations,
            price,
        }

        //posting a new meal
        const response = postData('http://localhost:5000/api/meals', meal);
        console.log(response, response.ok)
        if (response) {
            const messagge = `Meal : ${meal.title} Added`;
            alert(messagge)
        }
        else {
            throw new Error(response.status)
        }
        //making inputs empty
        setStatesEmpty()
    }

    return (
        <div className="add_meal_page">
            <div className="add_meal_info">
                <h3>Intreseted to become a Host ?</h3>
                <ul>
                    <li>Are You  Friendly and open-minded hosts who want to share your story with guests,</li>
                    <li>Are you ready to offer high quality food and ingredients,</li>
                    <li>Are you ready to create a memorable space with a real wow factor... something guests will tell all their friends about,</li>
                </ul>
                <p>Then this is for you, <span>Please Enter your meal details below..</span></p>
            </div>
            <h3>Add Meal</h3>
            <form onSubmit={onSubmit} className="add_meal_form">
                <div>
                    <label htmlFor="title">Meal Title : </label>
                    <input type="text" id="title" name="title" value={title} required onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="location">Location : </label>
                    <input type="text" id="location" name="location" required value={location} onChange={(e) => setLocation(e.target.value)} ></input>
                </div>
                <div>
                    <label htmlFor="when">Date & Time Of Hosting : </label>
                    <input type="datetime-local" id="when" name="when" required min={minDate()} value={when} onChange={(e) => setWhen(e.target.value)} ></input>
                </div>
                <div>
                    <label htmlFor="max_reservations">Max Reservations: </label>
                    <input type="number" id="max_reservations" name="max_reservations" required value={maxReservations} onChange={(e) => setMaxReservations(e.target.value)} ></input>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" value={price} required onChange={(e) => setPrice(e.target.value)} ></input>
                </div>
                <div>
                    <label htmlFor="description" className="meal_description">Description : </label>
                    <textarea id="description" name="description" value={description} required onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit" className="meal_submit_btn"> Submit</button>
            </form>

        </div>
    )

}
export default AddMeal;