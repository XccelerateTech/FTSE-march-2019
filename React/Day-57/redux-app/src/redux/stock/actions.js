import axios from 'axios'
export const LOAD_STOCK_LIST = "LOAD_STOCK_LIST"

export function LoadStockList(stocks){
    return {
        type: LOAD_STOCK_LIST,
        stocks: stocks
    }
}

export function LoadStockListFromAPI(){
    return (dispatch) => {
        axios('http://localhost:8080/stock').then(res => {
            dispatch(LoadStockList(res.data))
        })
    }
}
