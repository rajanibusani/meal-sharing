import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddReservation from "./AddReservation";

// import postData from "./postData";
const Meal = () => {
    const [meal, setMeal] = useState({});
    const [reservationForm, setResevationForm] = useState(false);
    const [noOfAvailableReservations, setNoOfAvailableReservations] = useState(null)
    const [message, setMessage] = useState("");
    //to get specific meal id
    const params = useParams();

    useEffect(() => {
        //fetching specific meal with id
        fetch(`/api/meals/${params.id}`)
            .then(res => res.json())
            .then(meal => {
                setMeal(meal[0])
            })
        //fetching to get available reservations
        fetch(`api/meals?availableReservations=true`)
            .then(res => res.json())
            .then(meals => {
                const mealObj = meals.find(meal => meal.id === Number(params.id));
                setNoOfAvailableReservations(mealObj.No_of_available_reservations)
            })
    }, [])
    //onClick functions for reservation
    function onClick() {
        if (Number(noOfAvailableReservations)) {
            setResevationForm(true)
        } else {
            setMessage("No Reservations Available")
        }
    }

    //formatting meal.when, datetime 
    const FormattingDate = (date) => {
        return new Date(date).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        })
    }
    return (
        <div className="meal_reservation">
            <div className="meal_info">
                <img src="https://madklubben.dk/wp-content/uploads/2020/07/restaurant_hero_FCKbh.jpg" width="200px"></img>
                <h3 >Meal : {meal.title}</h3>
                <h4>Description: {meal.description}</h4>
                <h4>Place: {meal.location}</h4>
                <h4>Date & Time : {FormattingDate(meal.when)}</h4>
                <h4>Price : {meal.price}DKK</h4>
                <h4>No Of Reservations: {meal.max_reservations}</h4>
                <h4>No Of Available Reservations: {noOfAvailableReservations}</h4>
                <div>
                    <button
                        onClick={onClick} className={!reservationForm ? "reservation_submit_btn" : "no_button"}>
                        Book Reservation
                    </button>
                </div>

                <div>
                    {reservationForm &&
                        <AddReservation id={params.id} setForm={setResevationForm} noOfAvailableReservations={noOfAvailableReservations} />}
                </div>
                <br />
                {message && <h2>{message}</h2>}
            </div>
        </div >
    )
}
export default Meal;