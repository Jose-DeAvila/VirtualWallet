import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { latestListReducer } from './reducer/latestReducer';
import thunk from 'redux-thunk';

const initialState={};
const reducer = combineReducers({
    LatestList: latestListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const core = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default core;