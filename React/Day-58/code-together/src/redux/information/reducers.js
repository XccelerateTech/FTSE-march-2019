import { LOAD_INFO_SUCCESS, LOAD_INFO_FAILURE } from './actions'

const initialState = {
    information : []
}

export function informationReducer (state = initialState, action){
    switch(action.type){
        case LOAD_INFO_SUCCESS:
            return{
                ...state,
                information: state.information.concat([action.information])
            }
        case LOAD_INFO_FAILURE:
            return state;
        default: 
        return state;
    }
}