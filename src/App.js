import ExpenseItem from "./components/ExpenseItem";

const currentDate = new Date().toLocaleDateString();
const expenses = [
    {id: 'e1', title: 'Car Insurance', price: 298.5, date: currentDate},
    {id: 'e2', title: 'New TV', price: 2985.5, date: currentDate},
    {id: 'e3', title: 'Toilet Paper', price: 25.8, date: currentDate},
    {id: 'e4', title: 'New PC(Desktop)', price: 512.75, date: currentDate},
];

function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem title={expenses[0].title}
                         price={expenses[0].price}
                         date={expenses[0].date}>

            </ExpenseItem><ExpenseItem title={expenses[1].title}
                                       price={expenses[1].price}
                                       date={expenses[1].date}>

            </ExpenseItem><ExpenseItem title={expenses[2].title}
                                       price={expenses[2].price}
                                       date={expenses[2].date}>

            </ExpenseItem><ExpenseItem title={expenses[3].title}
                                       price={expenses[3].price}
                                       date={expenses[3].date}></ExpenseItem>
        </div>
    );
}

export default App;