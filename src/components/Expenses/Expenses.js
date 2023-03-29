import React, {useState} from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState('-1');
    const filterChangeHandler = (year) => {
        setFilterDate(year);
    }

    const filteredList = () =>{
        if(filterDate === '-1'){
            return props.expense_collection;
        }else{
            return props.expense_collection.filter(expense => expense.date.getFullYear().toString() === filterDate);
        }
    };

    let expenseContent = <p>No expense found</p>;
    if(filteredList().length > 0){
        expenseContent = filteredList().map(expense => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                price={expense.price}
                date={expense.date}/>
        });
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filterDate} onFilterChangeData={filterChangeHandler}/>
            {expenseContent}
        </Card>
    );
}

export default Expenses;