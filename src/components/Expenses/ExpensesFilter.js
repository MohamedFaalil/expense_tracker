import React from 'react';

import './ExpensesFilter.css';

const getLastFiveYears = ()=>{
    const date = new Date();
    const dateCollection = [];
    for(let i=0; i <= 5; i++){
        dateCollection.push(date.setFullYear(date.getFullYear() - 1));
    }
    return dateCollection;
};
const ExpensesFilter = (props) => {
    const yearChangeHandler = (event)=>{
        props.onFilterChangeData(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={yearChangeHandler} value={props.selectedYear}>
                    <option value='-1'>All</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;