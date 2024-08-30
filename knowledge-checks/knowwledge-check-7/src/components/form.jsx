import React, { useRef } from "react";
import "../App.css";

const RegisterYourApplicationForm = (props) => {
  const userName = useRef();
  const userEmail = useRef();
  const userOrderNum = useRef();
  const reasonForReturn = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const allUserInfo = {
      
    };
    props.onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Please be specific in your reasons for returning your item</h2>

      <label>Name*:</label>
      <input type="text" required placeholder="Name"/>

      <label>Email*:</label>
      <input type="email" required placeholder="Email"/>

      <label>Order Number:</label>
      <input
        type="number"
        required
        min="0"
        placeholder="Please Enter the Number of your ticket"
      />

      <label>Reason for Return: </label>
      <textarea name="reason" required/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterYourApplicationForm;
