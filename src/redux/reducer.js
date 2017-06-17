/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from 'redux';
import axios from 'axios';


function jediReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_FINISH':
      return [
        ...action.payload,
        ...state,
      ];
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

export default combineReducers({
  jedi: jediReducer,
});
