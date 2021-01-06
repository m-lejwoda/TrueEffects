import {POST_LOGIN,LOGIN_ERROR} from './types';
import axios from 'axios';

export const postLogin =(data)=>dispatch => {
        console.log(data)
        // let data = {username: 'saxatachi' ,password:'lublin97'}
        axios.post('http://127.0.0.1:8000/api/login/',data)
        .then(res=> dispatch({
            type: POST_LOGIN,
            payload: res.data.token,
            
        }))
        .then(res=>{
            console.log(res)
            window.localStorage.setItem('token',res.payload)
        })
        .then(res=> dispatch({
            type: LOGIN_ERROR,
            payload: "",
        }))
        .catch(res=> dispatch({
            type: LOGIN_ERROR,
            payload: "Dane logowania są niepoprawne",
        }))
    
}
