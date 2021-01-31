import {POST_LOGIN,LOGIN_ERROR,POST_REGISTER, REGISTER_ERROR,POST_LOGOUT_AUTH} from '../actions/types';
const initialState = {
    token: '',
    error: '',
    error_register: ''
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
        case POST_REGISTER:
            return{
                ...state,
                token:action.payload
            }
        case REGISTER_ERROR:
            return{
                ...state,
                error_register:action.payload
            }
        case POST_LOGOUT_AUTH:
            return{
                ...state,
                token: ''
            }
        default: 
            return state;
    }
}