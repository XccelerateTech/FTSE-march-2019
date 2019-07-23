import {ADD_TEAM} from './actions'

const initialState = {
    teamList: [
        {name: 'Red'},
        {name: 'Blue'}
    ]
}

export function teamReducer(state = initialState, action){
    switch (action.type){
        case ADD_TEAM:
        return {
            ...state,
            teamList: state.teamList.concat([action.name])
        }
        default:
            return state;
    }
    return state;
}
