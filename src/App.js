import Expenses from "./components/Expenses";


const expenses = [
    {id: 'e1', title: 'New PC(Desktop)', price: 512.75, date: new Date('2023-03-14')},
    {id: 'e2', title: 'New TV', price: 2985.5, date: new Date('2023-03-15')},
    {id: 'e3', title: 'Toilet Paper', price: 25.8, date: new Date('2023-03-15')},
    {id: 'e4', title: 'Car Insurance', price: 298.5, date: new Date('2023-03-16')},
    {id: 'e5', title: 'Mouse pad', price: 3, date: new Date('2023-03-17')},
];
function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses expense_collection={expenses}/>
        </div>
    );
}

export default App;