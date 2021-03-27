import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const GetReservations = () => {
    const [reservations, setReservations] = useState([]);
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("/api/reservations")
            .then(res => res.json())
            .then(meals => {
                console.log(meals)
                setReservations(meals);
            })
    }, [])
    //  { reservations.map(reservation => {
    // fetch(`/api/meals/${reservation.meal_id}`)
    //     .then(res => res.json())
    //     .then(meals => {
    //         console.log(meals)
    //         setMeals(meals)
    //     })
    // return <div>
    //     <h2>{meals.title}</h2>
    //     {/* <h3>{reservation.no</h3> */}
    // </div>
    //})}
    return (<div>

        Reservations
    </div>)
}
export default GetReservations;