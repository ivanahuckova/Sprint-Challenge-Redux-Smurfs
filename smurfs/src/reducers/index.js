/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import * as types from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default function smurfs(state = initialState, action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload
      };
    case types.ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case types.DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case types.FETCHING_ON:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case types.FETCHING_OFF:
      return {
        ...state,
        fetchingSmurfs: false
      };
    case types.ADDING_ON:
      return {
        ...state,
        addingSmurf: true
      };
    case types.ADDING_OFF:
      return {
        ...state,
        addingSmurf: false
      };
    case types.ERROR_RESET:
      return {
        ...state,
        error: null
      };
    case types.ERROR_HANDLING:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
