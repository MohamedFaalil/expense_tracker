import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";


const Expenses = (props) => {
    let expenseItems = [];
    props.expense_collection.forEach((expense, index) => expenseItems.push(<ExpenseItem
        key={index}
        title={expense.title}
        price={expense.price}
        date={expense.date}/>))
    return (
        <Card className="expenses">
            {expenseItems}
        </Card>
    );
}

export default Expenses;