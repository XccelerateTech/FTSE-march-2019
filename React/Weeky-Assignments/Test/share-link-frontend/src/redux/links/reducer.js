import { ADD_LINK, LIST_LINKS } from './actions';

import { ADD_TAG, LIST_TAGS } from './actions';

const initialState = {
    linkList:[]
}


export function linkReducer(state = initialState, action){
    switch(action.type){
        case LIST_LINKS:
            return {
                linkList:action.links
            }
        break;
        case ADD_LINK:
            return{
                linkList: state.linkList.concat([action.link])
            }
    }
    return state;
}

const initialTags = {
    tagList: []
}

export function tagReducer(state = initialTags, action){
    switch(action.type){
        case LIST_TAGS:
            return {
                tagList: action.tags
            }
            break;
        case ADD_TAG:
            return{
                tagList: state.tagList.concat([action.tag])
            }
    }
    return state;
}