import './Expenses.css';
import ExpenseItem from "./ExpenseItem";




function Expenses(props)
{
    console.log(props.expense_collection)
    let expenseItems = [];
    props.expense_collection.forEach((expense, index)=> expenseItems.push(<ExpenseItem title={expense.title}
                                                                       price={expense.price}
                                                                       date={expense.date}/>))
    return(
        <div className="expenses">
            {expenseItems}
        </div>
    );
}

export default Expenses;