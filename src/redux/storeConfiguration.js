import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reduce/rootReducers';


export const store = createStore(allReducers, applyMiddleware(thunk));

