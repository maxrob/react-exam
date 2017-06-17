/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from 'redux';
import axios from 'axios';

const initialState = {
  message: null,
  isSuccess: null,
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
    case 'SET_SUCCESS_MESSAGE':
      return {
        ...state,
        message: action.message,
        isSuccess: true
      };
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        message: action.message,
        isSuccess: false
      };
    case 'RESET_MESSAGE':
      return {
        ...state,
        message: null,
        isSuccess: null,
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
  }
}

export function setSuccess(message) {
  return (dispatch) => {
    dispatch({
      type: 'SET_SUCCESS_MESSAGE',
      message: message,
    });
  }
}

export function setError(message) {
  return (dispatch) => {
    dispatch({
      type: 'SET_ERROR_MESSAGE',
      message: message,
    });
  }
}

export function resetMessage() {
  return (dispatch) => {
    dispatch({
      type: 'RESET_MESSAGE'
    });
  }
}

export default combineReducers({
  jedi: jediReducer,
});
