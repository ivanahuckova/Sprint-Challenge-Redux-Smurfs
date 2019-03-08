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
    //smurfs state
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

    //fetching state
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

    //adding state
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

    //deleting state
    case types.DELETING_ON:
      return {
        ...state,
        deletingSmurf: true
      };
    case types.DELETING_OFF:
      return {
        ...state,
        deletingSmurf: false
      };

    //error state
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

    //default
    default:
      return state;
  }
}
