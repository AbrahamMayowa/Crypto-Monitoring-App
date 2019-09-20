import { FETCH_CURRENCY_TO_CRYPTO_BEGIN, FETCH_CURRENCY_TO_CRYPTO_SUCCESS, FETCH_CURRENCY_TO_CRYPTO_FAILURE  } from '../action/currencyToCryptoApi';
import {FETCH_CRYPTO_TO_CURRENCY_SUCCESS, FETCH_CRYPTO_TO_CURRENCY_FAILURE, FETCH_CRYPTO_TO_CURRENCY_BEGIN} from '../action/cryptoToCurrencyApi';
import {UPDATE_QUANTITY, UPDATE_TOKEN_CODE, UPDATE_COUNTRY_CODE} from '../action/updateConvertProperty';

/*
export const initialState = {
    allSupportedToken: [],
    singleTokenLiveDetails: null,
    resultTokenToCountryCurrency: null,
    resultCountryCurrencyToCrypto: null,
    seletedCountryOption:'',
    seletedTokenOption: '',
    amountInput: null,
    error: null,
    loading: false,

    
    };
*/

const initialState = {
    resultTokenToCountryCurrency: null,
    resultCountryCurrencyToCrypto: null,
    quantityAmount: null,
    cryptoCode: '',
    currencyCode: '',
    error: null,
    loading: false,

}

export default function currencyCoverterReducer(state=initialState, action){
    switch(action.type){
        case FETCH_CURRENCY_TO_CRYPTO_BEGIN:
            return {
                ...state,
                loading: true
            };
        
        case FETCH_CURRENCY_TO_CRYPTO_SUCCESS:
            return {
                ...state,
                loading: false,
                resultCountryCurrencyToCrypto: action.payload.result
            };

        case FETCH_CURRENCY_TO_CRYPTO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case FETCH_CRYPTO_TO_CURRENCY_BEGIN:
            return {
                ...state,
                loading: true,
            };

        case FETCH_CRYPTO_TO_CURRENCY_SUCCESS:
            return {
                ...state,
                loading: false,
                resultTokenToCountryCurrency: action.payload.result
            };

        case FETCH_CRYPTO_TO_CURRENCY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error

            };
        
        case UPDATE_QUANTITY:
            return {
                ...state,
                quantityAmount: action.paylaod.amount
            };

        case UPDATE_COUNTRY_CODE:
            return {
                ...state,
                countryCode: action.paylaod.countryCode,
            };

        case UPDATE_TOKEN_CODE:
            return {
                ...state,
                cryptoCode: action.paylaod.tokenCode
            }

        default:
            return state

    }
}