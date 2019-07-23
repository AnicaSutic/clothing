import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import {persistStore} from 'redux-persist';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';



// replace thunk with saga, for handle async actions
//const middlewares = [thunk];

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// check what env we serve
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // spread midd into individial arguments

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
