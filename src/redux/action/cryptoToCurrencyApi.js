
// action to call api in order to convert input crypto amount to seleted country currency

export const FETCH_CRYPTO_TO_CURRENCY_BEGIN = 'FETCH_CRYPTO_TO_CURRENCY_BEGIN';
export const FETCH_CRYPTO_TO_CURRENCY_SUCCESS = 'FETCH_CRYPTO_TO_CURRENCY_SUCCESS';
export const FETCH_CRYPTO_TO_CURRENCY_FAILURE = 'FETCH_CRYPTO_TO_CURRENCY_FAILURE';



export const fetchCryptoToCurrencyBegin = () => ({
    type: FETCH_CRYPTO_TO_CURRENCY_BEGIN
});

export const fetchCryptoToCurrencySuccess = result => ({
    type: FETCH_CRYPTO_TO_CURRENCY_SUCCESS,
    payload: {result}
});

export const fetchCryptoToCurrencyFailure = error => ({
    type: FETCH_CRYPTO_TO_CURRENCY_FAILURE,
    payload: {error}
});




