// action to call api in order to convert input country currency amount to seleted cryptocurrency currency

export const FETCH_CURRENCY_TO_CRYPTO_BEGIN = 'FETCH_CURRENCY_TO_CRYPTO_BEGIN';

export const FETCH_CURRENCY_TO_CRYPTO_SUCCESS = 'FETCH_CURRENCY_TO_CRYPTO_SUCCESS';

export const FETCH_CURRENCY_TO_CRYPTO_FAILURE = 'FETCH_CURRENCY_TO_CRYPTO_FAILURE';



export const fetchCurrencyToCryptoBegin = () => ({
    type: FETCH_CURRENCY_TO_CRYPTO_BEGIN
});

export const fetchCurrencyToCryptoSuccess = (result) => ({
    type: FETCH_CURRENCY_TO_CRYPTO_SUCCESS,
    payload: {result}
});

export const fetchCurrencyToCryptoFailure = (error) => ({
    type: FETCH_CURRENCY_TO_CRYPTO_FAILURE,
    payload: {error}
});