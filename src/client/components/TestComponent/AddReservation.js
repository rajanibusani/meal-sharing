import React, { useState } from "react";
import postData from "./postData";


const AddReservation = ({ setForm, id, noOfAvailableReservations }) => {
    const [name, setName] = useState("");
    const [phNumber, setPhNumber] = useState("");
    const [email, setEmail] = useState("");
    const [noOfGuests, setNoOfGuests] = useState("");

    //function to set all states empty
    const setStatesEmpty = () => {
        setName("")
        setPhNumber("")
        setEmail("")
        setNoOfGuests("")
    }

    //on submit function
    function onSubmit(e) {
        e.preventDefault();
        const reservation = {
            meal_id: id,
            number_of_guests: noOfGuests,
            contact_name: name,
            contact_phonenumber: phNumber,
            contact_email: email
        }

        // calling postData function 
        const response = postData('/api/reservations', reservation)
        if (response) {
            const messagge = `Reserved for ${reservation.number_of_guests} guests by ${reservation.contact_name}  `;
            alert(messagge)
        } else {
            alert("reservation failed")
        }
        setForm(false);

        setStatesEmpty();
    }
    return (
        <form onSubmit={onSubmit} className="add_reservation_form">
            <div>
                <h3>Book Reservation</h3>
            </div>
            <div>
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" name="name" value={name} required onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="phoneNumber">PhoneNumber : </label>
                <input type="text" id="phoneNumber" name="PhNumber" value={phNumber} required onChange={(e) => setPhNumber(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" id="name" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} ></input>
            </div>
            <div>
                <label htmlFor="NoOfGuests">NoOfGuests: </label>
                <input type="number" id="NoOfGuests" value={noOfGuests} required name="NoOfGuests" max={noOfAvailableReservations} onChange={(e) => setNoOfGuests(e.target.value)} ></input>
            </div>
            <button type="submit" className="reservation_submit_btn"> Submit</button>

        </form>

    )
}
export default AddReservation;