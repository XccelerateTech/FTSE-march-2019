//action declaration
export const ADD_TEAM = 'ADD_TEAM';

//action 
export function addTeam(name){
    return {
        type: ADD_TEAM,
        name: name
    }
}