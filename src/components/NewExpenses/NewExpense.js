import React from "react";

import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const NewExpense = (prop) => {
  // const saveDataHandler = (prevData) => {
  //   const expData = {
  //     ...prevData,
  //     id: Math.random().toString(),
  //   };
  //   console.log(expData);
  // };
  const referenceSubmitHandler = (prevData) => {
    const expData = {
      ...prevData,
      id: Math.random().toString(),
    };
    console.log(expData);
    prop.onAddExpense(expData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={referenceSubmitHandler} />
    </div>
  );
};

export default NewExpense;
