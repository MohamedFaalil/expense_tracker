import React, {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';



const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState('-1');
    const filterChangeHandler = (year) => {
        setFilterDate(year);
    }

    let filteredList = props.expense_collection;
    if(filterDate !== '-1'){
        filteredList = props.expense_collection.filter(expense => expense.date.getFullYear().toString() === filterDate);
    }


    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filterDate} onFilterChangeData={filterChangeHandler}/>
            <ExpensesChart expenses={filteredList}/>
            <ExpensesList items={filteredList}/>
        </Card>
    );
}

export default Expenses;