/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const FETCHING_ON = 'FETCHING_ON';
export const FETCHING_OFF = 'FETCHING_OFF';
export const ADDING_ON = 'ADDING_ON';
export const ADDING_OFF = 'ADDING_OFF';

export const getSmurfs = () => dispatch => {
  dispatch(fetchingOn());
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: GET_SMURFS, payload: res.data });
      dispatch(fetchingOff());
    })
    .catch(err => dispatch(console.log(err)));
};

export const addSmurf = (name, age, height) => dispatch => {
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
    .catch(err => dispatch(console.log(err)));
};

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
