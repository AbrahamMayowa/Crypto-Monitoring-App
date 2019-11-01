import {GET_TOP_TOKEN_DETAILS_BEGIN, GET_TOP_TOKEN_DETAILS_SUCCESS, GET_TOP_TOKEN_DETAILS_FAILURE} from '../action/topTokenAction';


export const initialState = {
    error: null,
    loading: false,
    topTokenlist: null

    };

//for adding each seleted top token to topTokenList that will be render at the home page of the app

export default function topTokenReduce(state=initialState, action){
    switch(action.type){
        case GET_TOP_TOKEN_DETAILS_BEGIN:
            return {
                ...state,
                loading: true,
            };
        
        case  GET_TOP_TOKEN_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                topTokenList: action.payload.results 

            };
        case GET_TOP_TOKEN_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}
