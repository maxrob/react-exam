/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from 'redux';
import axios from 'axios';

const initialState = {
  errors: [],
  list: [],
}

function jediReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_FINISH':
      return {
        ...state,
        list: [...action.payload],
      };
    case 'ADD_SUCCESS':
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case 'ADD_FAILED':
      return {
        ...state,
        errors: [...action.error],
      };
    default:
      return state;
  }
}


export function fetchJedi() {
  return (dispatch) => {
    axios.get('http://localhost:3001/jedi')
      .then((res) => {
        dispatch({
          type: 'FETCH_FINISH',
          payload: res.data,
        });
      })
  }
}

export function addJedi(name) {
  return (dispatch) => {
    axios.post('http://localhost:3001/jedi', {name})
      .then((res) => {
        dispatch({
          type: 'ADD_SUCCESS',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ADD_FAILED',
          error: err,
        });
      })
  }
}

export default combineReducers({
  jedi: jediReducer,
});
