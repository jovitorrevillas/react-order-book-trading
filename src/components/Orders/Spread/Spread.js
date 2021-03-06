import React from 'react';
import classes from './Spread.css';
const spread = (props) => {

    return (
        <tr className={classes.Row}>
            <td>
                <span>{props.symbol} Spread:</span>
                <span>{props.spread ? props.spread.toFixed(4):null}</span>
            </td>
            <td></td>
            <td></td>
        </tr>
    )
}

export default spread;