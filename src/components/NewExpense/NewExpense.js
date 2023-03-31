import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>{
    const [showNewExpenseFrmStatus, setShowNewExpenseFrmStatus] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        props.onAddExpense(enteredExpenseData, closeAddNewExpenseForm);
    };

    const showAddNewExpenseForm = ()=>{
        setShowNewExpenseFrmStatus(true);
    };

    const closeAddNewExpenseForm = () => {
        setShowNewExpenseFrmStatus(false);
    };

    return (<div className="new-expense">
        {!showNewExpenseFrmStatus && <button onClick={showAddNewExpenseForm}>Add Expense</button>}
        {showNewExpenseFrmStatus && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                                                 onCloseExpenseForm={closeAddNewExpenseForm}/>}
    </div>);
};

export default NewExpense;