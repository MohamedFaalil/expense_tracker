import React, {useState} from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState('-1');
    const filterChangeHandler = (year) => {
        setFilterDate(year);
        props.onFilterExpense(year);
    }
    return (

        <Card className="expenses">
            <ExpensesFilter selectedYear={filterDate} onFilterChangeData={filterChangeHandler}/>
            {props.expense_collection.map(expense => {
                return <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    price={expense.price}
                    date={expense.date}/>
            })}
        </Card>
    );
}

export default Expenses;