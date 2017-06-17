/**
 * Created by thomashourlier on 2/26/17.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(thunk));
