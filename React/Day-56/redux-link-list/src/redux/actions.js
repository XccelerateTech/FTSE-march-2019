export const ADD_LINK = "ADD_LINK";

export const CLEAR_LINKS = "CLEAR_LINKS";

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