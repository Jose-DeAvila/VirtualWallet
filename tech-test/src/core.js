import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userRegisterReducer, userReloadReducer, userSigninReducer } from './reducer/userReducer';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState={ userSignin: {userInfo}};
const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userReload: userReloadReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const core = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default core;