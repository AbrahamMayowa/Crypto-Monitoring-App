import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reduce/rootReducers';
import topTokenAction from './action/topTokenDetailsThunk';


export const store = createStore(allReducers, applyMiddleware(thunk));

// call the thunk directly from the store in order to provide the details of top five cryptocurrency on page reques
//store.dispatch(topTokenAction());