import axios from 'axios'

export const fetchJedi = () => {
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

export const addJedi = (name) => {
  return (dispatch) => {
    axios.post('http://localhost:3001/jedi', { name })
      .then((res) => {
        dispatch({
          type: 'ADD_SUCCESS',
          payload: res.data,
        });
      })
  }
}

export const setSuccess = (message) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_SUCCESS_MESSAGE',
      message: message,
    });
  }
}

export const setError = (message) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_ERROR_MESSAGE',
      message: message,
    });
  }
}

export const resetMessage = () => {
  return (dispatch) => {
    dispatch({
      type: 'RESET_MESSAGE'
    });
  }
}
