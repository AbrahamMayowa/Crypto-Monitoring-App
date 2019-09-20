import {fetchCryptoToCurrencyBegin, fetchCryptoToCurrencyFailure, fetchCryptoToCurrencySuccess} from './cryptoToCurrencyApi';
import {fetchCurrencyToCryptoBegin, fetchCurrencyToCryptoFailure, fetchCurrencyToCryptoSuccess} from './currencyToCryptoApi';


// it fetch api using currency amount, currency code and token code parameter
export function cryptoToCurrencyThunk(cryptoQuantity, cryptoCode, currencyCode){
    return dispatch => {
        dispatch(fetchCryptoToCurrencyBegin());
        return fetch('https://bravenewcoin-v1.p.rapidapi.com/convert/${cryptoQuantity}/${cryptoCode}/${currencyCode}', {
            headers: {
                "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
                "x-rapidapi-key": "d3b14e840fmsh149fe1c03f54c21p181a98jsnf654e8b2b698"
            }
        }).then(res => res.json())
        .then(json => {
            console.log(json.result);
            dispatch(fetchCryptoToCurrencySuccess(json.result));
            return json.result;

        }).catch(error => {
            console.log(error);
            dispatch(fetchCryptoToCurrencyFailure(error));
        });

    };
    
}


// it fetch api using currency amount, currency code and token code parameter
export function currencyToCryptoThunk(currencyQuantity, currencyCode, cryptoCode){

    return dispatch => {
        dispatch(fetchCurrencyToCryptoBegin());
        return fetch('https://bravenewcoin-v1.p.rapidapi.com/convert/${currencyQuantity}/${currencyCode}/${cryptoCode}',
        {
            headers: {
                "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
                "x-rapidapi-key": "d3b14e840fmsh149fe1c03f54c21p181a98jsnf654e8b2b698" 
            }
        }).then(
            res => res.json()
        ).then(json => {
            console.log(json.result);
            dispatch(fetchCurrencyToCryptoSuccess(json.result));
            return json.result;
        }).catch(error => {
            dispatch(fetchCurrencyToCryptoFailure(error));
        }
        );
    };
}

