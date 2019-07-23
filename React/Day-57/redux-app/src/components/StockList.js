import * as React from 'react';
import StockLine from './StockLine'
import { connect } from 'react-redux'
import { LoadStockListFromAPI } from '../redux/stock/actions'

class PureStockList extends React.Component {
    componentWillMount(){
        this.props.loadStock();
    }

    render(){
        return (
            <div>
                {this.props.stocks.map(stock => (
                    <StockLine stock={stock} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stocks: state.stock.stockList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadStock: ()=>{
            dispatch(LoadStockListFromAPI())
        }
    }
}

export const StockList = connect(mapStateToProps, mapDispatchToProps)(PureStockList)