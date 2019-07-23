import axios from 'axios';
import { Dispatch } from 'redux';

export const LIST_LINKS = 'LIST-LINKS';

export const ADD_LINK = 'ADD_LINK';

export function ListLinksAction(links){
    return {
        links: links,
        type: LIST_LINKS
    }
}

export function AddLinkAction(link){
    return {
        link: link,
        type: ADD_LINK
    }
}

export function ListLinksFromAPIAction(search){
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/link?search=${search}`).then(res => {
            dispatch(ListLinksAction(res.data));
        });
    };
}

export function AddLinkActionThunk(link){
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/link`, link).then(res => {
            dispatch(AddLinkAction(link));
        });
    };
}

export const ADD_TAG = 'ADD_TAG';

export const LIST_TAGS = 'LIST_TAGS';


export function ListTagsAction(tags){
    return {
        tags: tags,
        type: LIST_TAGS
    }
}

export function AddTagAction(tags){
    return {
        tag: tags,
        type: ADD_TAG
    }
}

export function ListTagFromAPIAction(search){
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/tag?search=${search}`, {
            headers: {
                'Bearer Authentication': 'JWT-TOKEN'
            }
        }).then(res=>{
            dispatch(ListTagsAction(res.data));
        });
    };
}

export function AddTagActionThunk(tag){
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_API_SERVER}/api/tag`, tag).then(res => {
            dispatch(AddTagAction(tag));
        });
    }
}