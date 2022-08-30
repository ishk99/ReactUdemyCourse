import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card.js";
function ExpenseItem(props) {
  // below we are also using arrau destructuring
  const [title, setTitle] = useState(props.title);
  //first element is a pointer at the value being managed
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
