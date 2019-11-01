import {REDIRECT_TO_NATIONAL_COMPONENT} from '../action/redirectDestination'

const initialState = {
    redirectToNationalComponent: false
}

export default function redirectNational(state=initialState, action){
    switch(action.type){
        case REDIRECT_TO_NATIONAL_COMPONENT:
            return {
                ...state,
                redirectToNationalComponent: true
            };
        default:
                return state;

    }

}