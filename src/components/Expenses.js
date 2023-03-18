import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";




function Expenses(props)
{
    console.log(props.expense_collection)
    let expenseItems = [];
    props.expense_collection.forEach((expense, index)=> expenseItems.push(<ExpenseItem
                                                                        key={index}
                                                                        title={expense.title}
                                                                       price={expense.price}
                                                                       date={expense.date}/>))
    return(
        <Card className="expenses">
            {expenseItems}
        </Card>
    );
}

export default Expenses;