import React, {useState} from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState(new Date().getFullYear());
    let expenseItems = [];
    props.expense_collection.forEach((expense, index) => expenseItems.push(<ExpenseItem
        key={index}
        title={expense.title}
        price={expense.price}
        date={expense.date}/>));

    const filterChangeHandler = (year) => {
        console.log('on expenses', year);
        setFilterDate(year);
    }
    return (

        <Card className="expenses">
            <ExpensesFilter onFilterChangeData={filterChangeHandler}/>
            {expenseItems}
        </Card>
    );
}

export default Expenses;