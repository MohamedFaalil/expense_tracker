import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {
    let expenseItems = [];
    props.expense_collection.forEach((expense, index) => expenseItems.push(<ExpenseItem
        key={index}
        title={expense.title}
        price={expense.price}
        date={expense.date}/>));

    const onFilterChangeHandler = (data)=>{
        console.log('on expenses', data);
    }
    return (
        <>

            <Card className="expenses">
                <ExpensesFilter onFilterChangeData={onFilterChangeHandler}/>
                {expenseItems}
            </Card>
        </>
    );
}

export default Expenses;