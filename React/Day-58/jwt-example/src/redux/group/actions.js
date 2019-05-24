import axios from 'axios';

export const LOAD_GROUPS = "LOAD_GROUPS";

export function loadGroups (groups) {
    return {
        type: LOAD_GROUPS,
        groups: groups
    };
}

export function fetchGroups() {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/groups`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.get('token')
            }

        })
        .then(response => {
            dispatch(loadGroups(response.data))
        });
    };
}