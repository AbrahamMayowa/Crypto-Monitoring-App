export const GET_TOP_TOKEN_DETAILS_BEGIN = 'GET_TOKEN_DETAILS_BEGIN';
export const GET_TOP_TOKEN_DETAILS_SUCCESS = 'GET_TOKEN_DETAILS_SUCCESS';
export const GET_TOP_TOKEN_DETAILS_FAILURE = 'GET_TOKEN_DETAILS_FAILURE';


export const topTokenDetailsBegin = () =>({
    type: GET_TOP_TOKEN_DETAILS_BEGIN
});


export const topTokenDetailsSuccess = (tokenResults) =>({
    type: GET_TOP_TOKEN_DETAILS_SUCCESS,
    payload: tokenResults
});

export const topTokenDetailsFailure = (tokenError) => ({
    type: GET_TOP_TOKEN_DETAILS_FAILURE,
    payload: tokenError
});