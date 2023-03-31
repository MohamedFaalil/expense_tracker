import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import AddExpenseBanner from "./AddExpenseBanner";
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
        {!showNewExpenseFrmStatus && <AddExpenseBanner onShowAddExpenseForm={showAddNewExpenseForm}/>}
        {showNewExpenseFrmStatus && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                                                 onCloseExpenseForm={closeAddNewExpenseForm}/>}
    </div>);
};

export default NewExpense;