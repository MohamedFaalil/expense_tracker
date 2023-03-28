import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'PC(Desktop)', price: 512.75, date: new Date('2023-03-14')},
    {id: 'e2', title: 'TV', price: 2985.5, date: new Date('2022-03-15')},
    {id: 'e3', title: 'Toilet Paper', price: 25.8, date: new Date('2021-03-15')},
    {id: 'e4', title: 'Car Insurance', price: 298.5, date: new Date('2020-03-16')},
    {id: 'e5', title: 'Mouse pad', price: 3, date: new Date('2020-03-17')},
];
let expensesFullList = DUMMY_EXPENSES;
const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const getNewId = () => {
        const expenseLength = expenses.length;
        const lastIdPhrase = expenses[expenseLength - 1].id;
        const lastIdNumber = Number(lastIdPhrase.substring(1));
        return `e${lastIdNumber + 1}`;
    }
    const addExpenseHandler = (expense) => {
        expense.id = getNewId();
        setExpenses((prevExpenses)=>{
            const newExpenses = [expense,...prevExpenses];
            expensesFullList = newExpenses;
            return newExpenses;
        });
        // setExpenses([expense, ...expenses]);
    };

    const filterExpenseHandler = (year)=>{
        if(year === '-1'){
            setExpenses(expensesFullList);
        }else{
            setExpenses(expensesFullList.filter(expense => expense.date.getFullYear().toString() === year))
        }
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
            <Expenses expense_collection={expenses} onFilterExpense={filterExpenseHandler}/>
        </div>
    );
}

export default App;