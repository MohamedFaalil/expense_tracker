import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'PC(Desktop)', price: 512.75, date: new Date('2023-03-14')},
    {id: 'e2', title: 'TV', price: 2985.5, date: new Date('2023-03-15')},
    {id: 'e3', title: 'Toilet Paper', price: 25.8, date: new Date('2023-03-15')},
    {id: 'e4', title: 'Car Insurance', price: 298.5, date: new Date('2023-03-16')},
    {id: 'e5', title: 'Mouse pad', price: 3, date: new Date('2023-03-17')},
];

const App = () => {
    const [expenses, setExpense] = useState(DUMMY_EXPENSES);
    const getNewId = () => {
        const expenseLength = expenses.length;
        const lastIdPhrase = expenses[expenseLength - 1].id;
        const lastIdNumber = Number(lastIdPhrase.substring(1));
        return `e${lastIdNumber + 1}`;
    }
    const addExpenseHandler = (expense) => {
        expense.id = getNewId();
        console.log('new expense:', expense);
        setExpense((prevExpenses)=>{
            return [expense,...prevExpenses];
        });
        setExpense([expense, ...expenses]);
    };

    // OLD VERSION
    // return React.createElement('div',
    //     {},
    //     [
    //         React.createElement('h2',{}, 'Let\'s get started!'),
    //         React.createElement(Expenses, {expense_collection:expenses},'')
    //     ]);

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expense_collection={expenses}/>
        </div>
    );
}

export default App;