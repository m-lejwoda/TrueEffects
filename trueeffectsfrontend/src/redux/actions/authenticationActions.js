import {POST_LOGIN,LOGIN_ERROR, POST_REGISTER,REGISTER_ERROR} from './types';
import axios from 'axios';

export const postLogin =(data)=>dispatch => {
        console.log(data)
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
export const postRegister = (data) => dispatch =>{
    axios.post('http://127.0.0.1:8000/api/register/',data)
    .then(res=>dispatch({
        type: POST_REGISTER,
        payload: res.data.token
    }))
    .then(res=>{
        
        window.localStorage.setItem('token',res.payload)
    })
    .catch(res=> dispatch(
        {
        type: REGISTER_ERROR,
        payload: "Niepoprawne dane rejestracji",
    }))}
