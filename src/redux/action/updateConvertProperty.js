// the action to upadate currency convert reducer's quantityAmount, cryptoCode and currencyCode properties
// to provide arguments for the curency convert thunk action

// this action update the quantity property of state
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// update country currency code
export const UPDATE_COUNTRY_CODE = 'UPDATE_COUNTRY_CODE';


export const UPDATE_TOKEN_CODE = 'UPDATE_TOKEN_CODE';


export const updateQuantity = amount => ({
    type: UPDATE_QUANTITY,
    payload: amount
});

export const updateTokenCode = tokenCode => ({
    type: UPDATE_TOKEN_CODE,
    payload: tokenCode
});

export const updateCountryCode = countryCode => ({
    type: UPDATE_COUNTRY_CODE,
    payload: countryCode
});

