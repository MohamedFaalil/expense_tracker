import React, {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";


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


    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filterDate} onFilterChangeData={filterChangeHandler}/>
            <ExpensesList items={filteredList()}/>
        </Card>
    );
}

export default Expenses;