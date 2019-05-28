import axios from 'axios'

export const ADD_LINK = "ADD_LINK";

export const CLEAR_LINKS = "CLEAR_LINKS";

export const SPACE_MAN = "SPACE_MAN"

//Exercise A - Day 57

export const ADD_SPACEMAN = "ADD_SPACEMAN"

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


export function spaceMan(array) {
  return {
    type: SPACE_MAN,
    spaceArray: array
  }
}

//Exercise A - Day 57

export function addSpaceMan(spaceman) {
  return {
    type: ADD_SPACEMAN,
    spaceMan: spaceman
  }
}

//Exercise B
export function deleteLink(i) {
  return {
    type: DELETE_LINK,
    index: i
  }
}


/*
             Exercise A - Day 57
             */
export function spaceManThunk() {
  return (dispatch) => {
    return axios.get('http://api.open-notify.org/astros.json').then((response) => {
      console.log(response)
      let people = [];
      response.data.people.map(person => {
        people.push(person.name)
        dispatch(spaceMan(person.name))
      })
    })
  }
}