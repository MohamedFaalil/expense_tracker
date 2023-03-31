import React from "react";
import Card from "../UI/Card";

const AddExpenseBanner = (props)=>{
    const addNewExpenseFormHandler = ()=>{
        props.onShowAddExpenseForm();
    };

    return (
        <Card>
            <button onClick={addNewExpenseFormHandler}>Add Expense</button>
        </Card>
    );
};

export default AddExpenseBanner;