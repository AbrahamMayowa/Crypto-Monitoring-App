export const GET_TOKEN_DETAILS_BEGIN = 'GET_TOKEN_DETAILS_BEGIN';
export const GET_TOKEN_DETAILS_SUCCESS = 'GET_TOKEN_DETAILS_SUCCESS';
export const GET_TOKEN_DETAILS_FAILURE = 'GET_TOKEN_DETAILS_FAILURE';


export const getTokenDetailsBegin = () =>({
    type: GET_TOKEN_DETAILS_BEGIN
});


export const getTokenDetailsSuccess = result =>({
    type: GET_TOKEN_DETAILS_SUCCESS,
    payload: {result}
});



export const getTokenDetailsFailure = error => ({
    type: GET_TOKEN_DETAILS_FAILURE,
    payload: {error}
});

