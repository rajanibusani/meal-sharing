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
const initialValues = {
    title: "",
    location: "",
    description: "",
    maxReservations: "",
    when: "",
    price: ""
};
//adding Meal Component
const AddMeal = () => {
    const [inputValues, setInputValues] = useState(initialValues);

    // Input OnChange function
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value })
    }
    //on submit function
    function onSubmit(e) {
        e.preventDefault();
        const meal = {
            title: inputValues.title,
            description: inputValues.description,
            location: inputValues.location,
            when: inputValues.when,
            max_reservations: inputValues.maxReservations,
            price: inputValues.price,
        }

        //posting a new meal
        const response = postData('/api/meals', meal);
        console.log(response, response.ok)
        if (response) {
            const messagge = `Thank You, Your Meal : ${meal.title} Added`;
            alert(messagge)
        }
        else {
            throw new Error(response.status)
        }
        //making inputs empty
        setInputValues(initialValues)
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
                    <label htmlFor="title">Meal Title* : </label>
                    <input type="text" id="title" name="title" value={inputValues.title} required onChange={handleOnChange}></input>
                </div>

                <div>
                    <label htmlFor="location">Location* : </label>
                    <input type="text" id="location" name="location" required value={inputValues.location} onChange={handleOnChange} ></input>
                </div>
                <div>
                    <label htmlFor="when">Date & Time Of Hosting* : </label>
                    <input type="datetime-local" id="when" name="when" required min={minDate()} value={inputValues.when} onChange={handleOnChange} ></input>
                </div>
                <div>
                    <label htmlFor="max_reservations">Max Reservations* : </label>
                    <input type="number" id="max_reservations" name="maxReservations" required value={inputValues.maxReservations} onChange={handleOnChange} ></input>
                </div>
                <div>
                    <label htmlFor="price">Price* : </label>
                    <input type="number" id="price" name="price" value={inputValues.price} required onChange={handleOnChange} ></input>
                </div>
                <div>
                    <label htmlFor="description" className="meal_description">Description* : </label>
                    <textarea id="description" name="description" value={inputValues.description} required onChange={handleOnChange}></textarea>
                </div>
                <button type="submit" className="meal_submit_btn"> Submit</button>
            </form>

        </div>
    )

}
export default AddMeal;