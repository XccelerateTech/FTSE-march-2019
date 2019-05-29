import axios from 'axios';

export const LOAD_INFO_SUCCESS = "LOAD_INFO_SUCCESS"
export const LOAD_INFO_FAILURE = "LOAD_INFO_FAILURE"

function loadInfoSuccess (info){
    return {
        type: LOAD_INFO_SUCCESS,
        information: info
    }
}

function loadInfoFailure (message){
    return {
        type: LOAD_INFO_FAILURE,
        message: message
    }
}

export function getInfo(){
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_SERVER}/api/information`).then(response => {
            if(response.data == null){
                dispatch(loadInfoFailure('No response data.'))
            } else {
                
                dispatch(loadInfoSuccess(response.data))
            }
        })
    }
}