import { GET_TOKEN_DETAILS_BEGIN, GET_TOKEN_DETAILS_SUCCESS, GET_TOKEN_DETAILS_FAILURE } from "../action/getTokenDetails";


// this will be also used to get the live price of top then tokens at the main page of the app

// the reducer will update the singleTokenLiveDetails with argument from action
// this updated state's property will be used to populated each token details component
// user will get error if visit the token details without populating the singleTokenLiveDetails property


const initialState = {
    singleTokenLiveDetails: null,
    error: null,
    loading: false,

};


export default function getTokenDetailsReducer(state=initialState, action){
  switch(action.type){
    case GET_TOKEN_DETAILS_BEGIN:
        return {
            ...state,
            loading: true,
        };
    
    case GET_TOKEN_DETAILS_SUCCESS:
        return {
            ...state,
            loading: false,
            singleTokenLiveDetails: action.payload.result
        };
    
    case GET_TOKEN_DETAILS_FAILURE:
        return {
            ...state,
            loading:false,
            error: action.payload.errror
        };

    default:
        return state

  }

}