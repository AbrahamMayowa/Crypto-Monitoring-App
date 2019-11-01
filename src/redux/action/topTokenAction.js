export const GET_TOP_TOKEN_DETAILS_BEGIN = 'GET_TOKEN_DETAILS_BEGIN';
export const GET_TOP_TOKEN_DETAILS_SUCCESS = 'GET_TOKEN_DETAILS_SUCCESS';
export const GET_TOP_TOKEN_DETAILS_FAILURE = 'GET_TOKEN_DETAILS_FAILURE';


export const topTokenDetailsBegin = () =>({
    type: GET_TOP_TOKEN_DETAILS_BEGIN
});


export const topTokenDetailsSuccess = results =>({
    type: GET_TOP_TOKEN_DETAILS_SUCCESS,
    payload: {results}
});

export const topTokenDetailsFailure = error => ({
    type: GET_TOP_TOKEN_DETAILS_FAILURE,
    payload: {error}
});