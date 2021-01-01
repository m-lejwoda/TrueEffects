import {POST_LOGIN} from '../actions/types';
const initialState = {
    token: {}
};

export default function authreducer(state=initialState,action){
    switch(action.type){
        case POST_LOGIN:
            return{
                ...state,
                token:action.payload,
            }
        default: 
            return state;
    }
}