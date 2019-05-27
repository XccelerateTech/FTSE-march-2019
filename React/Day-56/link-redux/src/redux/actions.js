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