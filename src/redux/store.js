import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import {persistStore} from 'redux-persist';

const middlewares = [];

// check what env we serve
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // spread midd into individial arguments

export const persistor = persistStore(store)
