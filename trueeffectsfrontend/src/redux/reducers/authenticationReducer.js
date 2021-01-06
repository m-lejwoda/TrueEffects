import {POST_LOGIN,LOGIN_ERROR} from '../actions/types';
const initialState = {
    token: '',
    error: ''
};

export default function authreducer(state=initialState,action){
    switch(action.type){
        case POST_LOGIN:
            return{
                ...state,
                token:action.payload,
                error: ''
            }
        case LOGIN_ERROR:
            return{
                ...state,
                error:action.payload
            }
        default: 
            return state;
    }
}