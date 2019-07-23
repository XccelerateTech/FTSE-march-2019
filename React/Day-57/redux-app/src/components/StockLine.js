import * as React from 'react';
import { connect } from 'react-redux';

export default class StockLine extends React.Component{
    render(){
        return (
            <div>
                <h4>Stocks:</h4>
                    {this.props.stock.code}
                    {this.props.stock.name}
            </div>
        )
    }
}

// will need to add code for fav