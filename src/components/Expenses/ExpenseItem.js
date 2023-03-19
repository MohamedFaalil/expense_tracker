import Card from "../UI/Card";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const clickHandler = ()=>{
        console.log("Hey I'm triggered!");
    };
    return (<Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.price}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>);
}

export default ExpenseItem;