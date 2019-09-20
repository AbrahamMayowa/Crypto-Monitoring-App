import {combineReducers} from 'redux';
import currencyConverterReducer from './currencyConverterReducer';
import gotTokenDetailsReducer from './getTokenDetailReduce';
import topTokenReducer from './topTokenReduce';



export default combineReducers({
    currencyConverterReducer,
    gotTokenDetailsReducer,
    topTokenReducer,
})