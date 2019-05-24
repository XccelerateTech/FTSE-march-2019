import {  LOAD_GROUPS } from './actions';

const initialState = {
  groups: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GROUPS:
      return {
        ...state,
        groups: action.groups
      };
    default:
      return initialState;
  }
};