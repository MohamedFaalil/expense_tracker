import React, { useState } from "react";
import './ExpenseForm.css';

const getCurrentDate = ()=>{
    const date = new Date();
    const month = date.toLocaleString('en-US', {month: '2-digit'});
    const year = date.getFullYear();
    const day = date.toLocaleString('en-US', {day: 'numeric'});
    return `${year}-${month}-${day}`;
};
const ExpenseForm = (props)=>{
    const nowDate = getCurrentDate();
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('0.0');
    const[enteredDate, setEnteredDate] = useState(getCurrentDate());
    // const [enteredUserInputs, setUserInputs] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '0.0',
    //     enteredDate: getCurrentDate()
    // });
    const titleChangeHandler = event =>{
            setEnteredTitle(event.target.value);
        // setUserInputs({
        //     ...enteredUserInputs,
        //     enteredTitle: event.target.value
        // });
        // setUserInputs((prevState)=>{
        //     return {
        //       ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // })
        // console.log('title:',event.target.value);
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
        // setUserInputs({
        //     ...enteredUserInputs,
        //     enteredAmount: event.target.value
        // });
        // console.log('title:',event.target.value);

    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
        // setUserInputs({
        //     ...enteredUserInputs,
        //     enteredDate: event.target.value
        // });
        // console.log('title:',event.target.value);

    };

    const formSubmitHandler = (event)=>{
        event.preventDefault();
        const submittedFormData = {
                title:enteredTitle,
                price: enteredAmount,
                date: new Date(enteredDate)
        };

        props.onSaveExpenseData(submittedFormData);

        setEnteredTitle('');
        setEnteredAmount('0.0');
        setEnteredDate(getCurrentDate);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}
                           value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.01" value={enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max={nowDate} value={enteredDate}
                           onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCloseExpenseForm}>Cancel</button>
                    <button type="submit">Add Button</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;