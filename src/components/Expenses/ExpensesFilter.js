import React from 'react';

import './ExpensesFilter.css';

const getLastFiveYears = ()=>{
    const date = new Date();
    const dateCollection = [date.getFullYear().toString()];
    for(let i=0; i < 4; i++){
        date.setFullYear(date.getFullYear() - 1)
        dateCollection.push(date.getFullYear().toString());
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
                    {getLastFiveYears().map(year=> {
                        return <option value={year}>{year}</option>;
                    })}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;