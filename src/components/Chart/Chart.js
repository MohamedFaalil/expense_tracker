import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props => {
    const valuesArr = props.dataPoints.map(dataPoint=>dataPoint.value);
    const maxPrice = Math.max(...valuesArr);
    return(
        <div className="chart">
            {props.dataPoints.map(dataPoint=> <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={maxPrice}
                label={dataPoint.label}
            />)}
        </div>
    );
};

export default Chart;