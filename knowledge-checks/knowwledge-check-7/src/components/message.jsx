const Message = (props) => {
  return (
    <div>
      <h3>{props.name}, thank you for submitting our form</h3>
      <p> You registered under the email {props.email}</p>
      <p>Order Number: {props.orderNum}</p>
      <p>Reason for Return: {props.reasonForReturn}</p>
    </div>
  );
};

export default Message;
