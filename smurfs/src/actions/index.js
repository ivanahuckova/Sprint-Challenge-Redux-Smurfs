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

export const getSmurfs = () => dispatch => {
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: GET_SMURFS, payload: res.data }))
    .catch(err => dispatch(console.log(err)));
};

export const addSmurf = (name, age, height) => dispatch => {
  axios
    .post(`http://localhost:3333/smurfs`, {
      name,
      age,
      height
    })
    .then(res => dispatch({ type: ADD_SMURF, payload: res.data }))
    .catch(err => dispatch(console.log(err)));
};
