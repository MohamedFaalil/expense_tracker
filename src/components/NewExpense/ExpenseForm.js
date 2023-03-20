import React, { useState } from "react";
import './ExpenseForm.css';

const getCurrentDate = ()=>{
    const date = new Date();
    const month = date.toLocaleString('en-US', {month: '2-digit'});
    const year = date.getFullYear();
    const day = date.toLocaleString('en-US', {day: 'numeric'});
    return `${year}-${month}-${day}`;
};
const ExpenseForm = ()=>{
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('0.0');
    const[enteredDate, setEnteredDate] = useState(getCurrentDate());
    const titleChangeHandler = event =>{
            setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };


    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.01" value={enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max={enteredDate} value={enteredDate}
                           onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Button</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;