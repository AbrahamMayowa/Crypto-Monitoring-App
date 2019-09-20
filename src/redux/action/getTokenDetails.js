export const GET_TOKEN_DETAILS_BEGIN = 'GET_TOKEN_DETAILS_BEGIN';
export const GET_TOKEN_DETAILS_SUCCESS = 'GET_TOKEN_DETAILS_SUCCESS';
export const GET_TOKEN_DETAILS_FAILURE = 'GET_TOKEN_DETAILS_FAILURE';


export const getTokenDetailsBegin = () =>({
    type: GET_TOKEN_DETAILS_BEGIN
});


export const getTokenDetailsSuccess = (tokenDetails) =>({
    type: GET_TOKEN_DETAILS_SUCCESS,
    payload: {tokenDetails}
});

export const getTokenDetailsFailure = (tokenError) => ({
    type: GET_TOKEN_DETAILS_FAILURE,
    payload: {tokenError}
});

