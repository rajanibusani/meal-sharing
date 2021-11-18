import React, { useState } from "react";
import postData from "./postData";

const initialValues = {
    userName: "",
    phNumber: "",
    email: "",
    noOfGuests: ""
};

const AddReservation = ({ setForm, id, noOfAvailableReservations }) => {
    const [inputValues, setInputValues] = useState(initialValues);

    //input On Change function
    const handleOnChange = (e) => {
        //  const name = e.target.name;
        //   const value = e.target.value;
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value })
    }
    //on submit function
    function onSubmit(e) {
        e.preventDefault();
        const reservation = {
            meal_id: id,
            contact_name: inputValues.userName,
            number_of_guests: inputValues.noOfGuests,
            contact_phonenumber: inputValues.phNumber,
            contact_email: inputValues.email
        }

        // calling postData function 
        const response = postData('/api/reservations', reservation)
        if (response) {
            const messagge = `Thank You For Your Reservation...!
            Reserved for ${reservation.number_of_guests} guests by ${reservation.contact_name} `;
            alert(messagge)
        } else {
            alert("reservation failed")
        }
        setForm(false);
        //setting to intialstates
        setInputValues(initialValues)


    }
    return (
        <form onSubmit={onSubmit} className="add_reservation_form">
            <div>
                <h3>Book Reservation</h3>
            </div>
            <div>
                <label htmlFor="name">Name* : </label>
                <input type="text" id="name" name="userName" value={inputValues.userName} required onChange={handleOnChange}></input>
            </div>
            <div>
                <label htmlFor="phoneNumber">PhoneNumber* : </label>
                <input type="text" id="phoneNumber" name="phNumber" value={inputValues.phNumber} required onChange={handleOnChange}></input>
            </div>
            <div>
                <label htmlFor="email">Email* : </label>
                <input type="email" id="name" name="email" value={inputValues.email} required onChange={handleOnChange} ></input>
            </div>
            <div>
                <label htmlFor="NoOfGuests">NoOfGuests* : </label>
                <input type="number" id="NoOfGuests" name="noOfGuests" value={inputValues.noOfGuests} required min="0" max={noOfAvailableReservations} onChange={handleOnChange} ></input>
            </div>
            <button type="submit" className="reservation_submit_btn"> Submit</button>

        </form>

    )
}
export default AddReservation;

