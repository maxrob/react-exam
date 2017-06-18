/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from 'redux';
import {
  FETCH_FINISH,
  ADD_SUCCESS,
  SET_SUCCESS_MESSAGE,
  SET_ERROR_MESSAGE,
  RESET_MESSAGE
} from './constants';
import axios from 'axios';

const initialState = {
  message: null,
  isSuccess: null,
  list: [],
}

function jediReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FINISH:
      return {
        ...state,
        list: [...action.payload],
      };
    case ADD_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        message: action.message,
        isSuccess: true
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        message: action.message,
        isSuccess: false
      };
    case RESET_MESSAGE:
      return {
        ...state,
        message: null,
        isSuccess: null,
      };
    default:
      return state;
  }
}

export default combineReducers({
  jedi: jediReducer,
});
