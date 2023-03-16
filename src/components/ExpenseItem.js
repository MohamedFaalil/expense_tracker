import './ExpenseItem.css'
function ExpenseItem() {
    const date = new Date();
    const currentDate = date.toLocaleDateString('');
    const expenseTitle = "Car Insurance";
    const expenseAmount = "294.9";
    return (<div className="expense-item">
        <div>{currentDate}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    </div>);
}

export default ExpenseItem;