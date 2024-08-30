import React, { useState } from "react";
import "../App.css";

const RegisterYourApplicationForm = (props) => {
  const [data, setData] = useState({
    name: "", 
    email: "",
    orderNum: "",
    reasonForReturn: ""
  });

  // when the input changes, set the previous elements of data to the user input values
  const preset = (event) => {
    setData({...data, [event.target.name]: event.target.value })    
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // retrieve all user input and set the data to it
    const allUserInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      orderNum: event.target.orderNum.value,
      reasonForReturn: event.target.reasonForReturn.value
    };
    setData(allUserInfo);

    // on user submit, pass data to back to parent comp
    props.onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Please be specific in your reasons for returning your item</h2>

      <label>Name*:</label>
      <input type="text" required placeholder="Name" value={data.name} name="name" onChange={preset} />

      <label>Email*:</label>
      <input type="email" required placeholder="Email" value={data.email} name="email" onChange={preset} />

      <label>Order Number:</label>
      <input
        type="number"
        required
        min="0"
        placeholder="Please Enter the Number of your ticket"
        value={data.orderNum}
        name="orderNum"
        onChange={preset}
      />

      <label>Reason for Return: </label>
      <textarea name="reasonForReturn" required value={data.reasonForReturn} onChange={preset} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterYourApplicationForm;
