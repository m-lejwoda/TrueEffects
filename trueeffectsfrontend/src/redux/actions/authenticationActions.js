import {POST_LOGIN,POST_LOGOUT_AUTH,LOGIN_ERROR, POST_REGISTER,REGISTER_ERROR} from './types';
import axios from 'axios';

export const postLogin =(data)=>dispatch => {
        delete axios.defaults.headers.common["Authorization"];
        axios.post('http://127.0.0.1:8000/api/login/',data)
        .then(res=>{
            console.log(res)
            window.localStorage.setItem('token',res.data.token)
            window.localStorage.setItem('username',res.data.username)
            console.log(window.localStorage.getItem('token'))
            console.log(window.localStorage.getItem('username'))
            dispatch({
                    type: POST_LOGIN,
                    payload: res.data.token,
                    username: res.data.username
                })
        })
        // .then(res=> dispatch({
        //     type: POST_LOGIN,
        //     payload: res.data.token,
        //     username: res.data.username
        // }))
        // .then(res=>{
        //     console.log(res)
        //     window.localStorage.setItem('token',res.payload)
        //     window.localStorage.setItem('username',res.username)
        //     console.log(window.localStorage.getItem('token'))
        //     console.log(window.localStorage.getItem('username'))
        // })
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
export const postLogoutAuth = () => dispatch =>{
    dispatch({
        type: POST_LOGOUT_AUTH
    })
}