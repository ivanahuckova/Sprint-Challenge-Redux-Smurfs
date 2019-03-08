import axios from 'axios';

//export action types

//action types for working with server
export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const DELETE_SMURF = 'DELETE_SMURF';

//transition handling action types
export const FETCHING_ON = 'FETCHING_ON';
export const FETCHING_OFF = 'FETCHING_OFF';
export const ADDING_ON = 'ADDING_ON';
export const ADDING_OFF = 'ADDING_OFF';
export const DELETING_ON = 'DELETING_ON';
export const DELETING_OFF = 'DELETING_OFF';

//error handling action types
export const ERROR_HANDLING = 'ERROR_HANDLING';
export const ERROR_RESET = 'ERROR_RESET';

//load smurfs
export const getSmurfs = () => dispatch => {
  dispatch(errorReset());
  dispatch(fetchingOn());
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: GET_SMURFS, payload: res.data });
      dispatch(fetchingOff());
    })
    .catch(err => dispatch({ type: ERROR_HANDLING, payload: err.message }));
};

//add smurf
export const addSmurf = (name, age, height) => dispatch => {
  dispatch(errorReset());
  dispatch(addingOn());
  axios
    .post(`http://localhost:3333/smurfs`, {
      name: name,
      age: age,
      height: height
    })
    .then(res => {
      dispatch({ type: ADD_SMURF, payload: res.data });
      dispatch(addingOff());
    })
    .catch(err => dispatch({ type: ERROR_HANDLING, payload: err.message }));
};

//delete smurf
export const deleteSmurf = id => dispatch => {
  dispatch(errorReset());
  dispatch(deletingOn());
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF, payload: res.data });
      dispatch(deletingOff());
    })
    .catch(err => dispatch({ type: ERROR_HANDLING, payload: err.message }));
};

//transition (loading/adding/deleting) handling
export const fetchingOn = () => {
  return {
    type: FETCHING_ON
  };
};

export const fetchingOff = () => {
  return {
    type: FETCHING_OFF
  };
};

export const addingOn = () => {
  return {
    type: ADDING_ON
  };
};

export const addingOff = () => {
  return {
    type: ADDING_OFF
  };
};

export const deletingOn = () => {
  return {
    type: DELETING_ON
  };
};

export const deletingOff = () => {
  return {
    type: DELETING_OFF
  };
};

//error reset
export const errorReset = () => {
  return {
    type: ERROR_RESET
  };
};
