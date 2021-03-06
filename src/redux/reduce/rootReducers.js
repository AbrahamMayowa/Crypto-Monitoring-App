import {combineReducers} from 'redux';
import currencyConverterReducer from './currencyConverterReducer';
import gotTokenDetailsReducer from './getTokenDetailReduce';
import topTokenReducer from './topTokenReduce';
import redirectNational from './redirectReducer'



export default combineReducers({
    currencyConverterReducer,
    gotTokenDetailsReducer,
    topTokenReducer,
    redirectNational
})