import {LOAD_STOCK_LIST} from './actions'

const initialState ={
    stockList: []
}

export function stockReducer (state = initialState, action) {
    switch(action.type){
        case LOAD_STOCK_LIST:
            return {
                stockList: action.stocks
            }
        default:
            return state;
    }
    return state;
}