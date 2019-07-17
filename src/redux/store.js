import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middlewares = [logger];

export default createStore(rootReducer, applyMiddleware(...middlewares)); // spread midd into individial arguments