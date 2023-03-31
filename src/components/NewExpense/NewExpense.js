import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import AddExpenseBanner from "./AddExpenseBanner";
const NewExpense = (props)=>{
    const [showNewExpenseFrmStatus, setShowNewExpenseFrmStatus] = useState(true);
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        props.onAddExpense(enteredExpenseData, setShowNewExpenseFrmStatus);
    };

    return (<div className="new-expense">
        {!showNewExpenseFrmStatus && <AddExpenseBanner onShowAddExpenseFormStatus={setShowNewExpenseFrmStatus}/>}
        {showNewExpenseFrmStatus && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                                                 onShowAddExpenseFormStatus={setShowNewExpenseFrmStatus}/>}
    </div>);
};

export default NewExpense;