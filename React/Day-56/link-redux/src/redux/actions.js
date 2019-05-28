import axios from 'axios';

export const ADD_LINK = "ADD_LINK";

export const CLEAR_LINKS = "CLEAR_LINKS";

export const SPACE_MAN = "SPACE_MAN"

// Exercise B
export const DELETE_LINK = "DELETE_LINK"

export function addLink(title, url) {
    return {
      type: ADD_LINK,
      link: {
        title: title,
        url: url
      }
    }
  }
  
  export function clearLink() {
    return {
      type: CLEAR_LINKS
    }
  }

  export function spaceMan (array){
      return {
          type: SPACE_MAN,
          spaceArray : array
      }
  }

  //Exercise B
  export function deleteLink(i) {
    return {
      type: DELETE_LINK,
      index: i
    }
  }


  export const LOAD_LINK_SUCCESS = "LOAD_LINK_SUCCESS";

  export const LOAD_LINK_FAILURE = "LOAD_LINK_FAILURE";

  export function loadLinkSuccess(links) {
    return {
      type: LOAD_LINK_SUCCESS,
      links: links
    }
  }

  export function loadLinkFailure(){
    return {
      type: LOAD_LINK_FAILURE
    }
  }

  export function loadLinkThunk(){
    return dispatch => {
      return axios('https://www.reddit.com/r/programming.json')
        .then(response => {
          let links = response.data.data.children.map(link => ({
            title: link.data.title,
            url: link.data.url
          }))
          dispatch(loadLinkSuccess(links))
        })
        .catch(err => {
          dispatch(loadLinkFailure())
        })
    }
  }