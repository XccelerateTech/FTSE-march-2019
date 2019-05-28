import { ADD_LINK, CLEAR_LINKS, SPACE_MAN, DELETE_LINK, ADD_SPACEMAN } from './actions'

const initialState = {
    links: [
        {
            title: "Google", url: "https://www.google.com"
        },
        {
            title: "Yahoo", url: "https://www.yahoo.com"
        },
        {
            title: "Facebook", url: "https://www.facebook.com"
        },
        {
            title: "Gmail", url: "https://www.gmail.com"
        }
    ],

    //Exercise A
    users: [
        { firstName: "Timmy", lastName: "Smith", age: 25, occupation: "Writer" },
        { firstName: "Jane", lastName: "Doe", age: 32, occupation: "Developer of Software" },
        { firstName: "Amanda", lastName: "Keith", age: 44, occupation: "Dancer" },
        { firstName: "Sally", lastName: "Herman", age: 21, occupation: "Artist" },

    ],
    spacePeople: []
}


// we need to pass the intial state and the update so that redux knows what to update, and redux will always return a complete state
export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LINK:
            return {
                ...state,
                links: state.links.concat([action.link])
            };
        case CLEAR_LINKS:
            return {
                ...state,
                links: []
            };
        case SPACE_MAN:
            return {
                ...state,
                spacePeople: state.spacePeople.concat([action.spaceArray])
            };
        //Exercise A - Day 57

        case ADD_SPACEMAN:
            return {
                ...state,
                spacePeople: state.spacePeople.concat([action.spaceMan])
            }

        //Exercise B
        case DELETE_LINK:
            return {
                ...state,
                links: state.links.filter((link, index) => index != action.index)
            }
        default:
            return state;
    }
}