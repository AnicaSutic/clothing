import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import {persistReducer} from 'redux-persist';
// import local storage
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directoryReducer';
import { shopReducer } from './shop/shopReducer';

// whitelist is array of reducers we want to persist
const persistConfig = {
    key: 'root', // start storing from root
    storage,
    whitelist:['cart'] //array containing string names of any reducer we want to store
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig,rootReducer)
