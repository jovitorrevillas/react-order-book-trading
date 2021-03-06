import React, { Component } from 'react';
import classes from './OrderBook.css';
import { connect } from 'react-redux';
import Orders from '../../components/Orders/Orders';
import Spread from '../../components/Orders/Spread/Spread';
class OrderBook extends Component {

    state = {
        title: [
            "Price",
            "Volume",
            "Type"
        ]
    }

    render () {
        const asks = [];
        const bids = [];
        let spread = null;
        for(let key in this.props.orders){
            if(this.props.orders[key].type === "ask" && !this.props.orders[key].closed){
                asks.push({
                    ...this.props.orders[key]
                })
            } else if(this.props.orders[key].type === "bid" && !this.props.orders[key].closed){
                bids.push({
                    ...this.props.orders[key]
                })
            }
        }

        asks.sort((a, b) => b.price - a.price);
        bids.sort((a, b) => b.price - a.price);

        if(asks[asks.length - 1] && bids[0]){
            spread = asks[asks.length - 1].price -  bids[0].price;
        }

        
        const heading = this.state.title.map(name => (
            <th key={name}>{name}</th>
        ))

        return (
            <table className={classes.OrderBook}>
                <thead className={classes.Head}>
                    <tr>{heading}</tr>
                </thead>
                <tbody className={classes.Body}>
                <Orders list={asks} type="ask"/>
                <Spread
                    spread={spread ? +spread.toFixed(4) : null}
                    symbol={this.props.symbol}
                />
                <Orders list={bids} type="bid"/>
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.order,
        symbol: state.user.balances[0].symbol
    }
}

export default connect(mapStateToProps, null)(OrderBook);