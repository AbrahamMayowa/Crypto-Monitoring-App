import {getTokenDetailsBegin, getTokenDetailsFailure, getTokenDetailsSuccess} from './getTokenDetails';
 
// action thunk for fetching the price or details of a token base on clicked token
export default function getTokenDetailsThunk(cryptocode){
    return dispatch => {
        dispatch(getTokenDetailsBegin());
        return fetch(`https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=${cryptocode}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
                "x-rapidapi-key": "d3b14e840fmsh149fe1c03f54c21p181a98jsnf654e8b2b698"
            }
        }).then(res => res.json())
        .then(result => {
            dispatch(getTokenDetailsSuccess(result));
            return result;

        }).catch(error => {
            dispatch(getTokenDetailsFailure(error));
        });

    };
    
}