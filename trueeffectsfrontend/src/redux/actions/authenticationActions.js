import {POST_LOGIN} from './types';
import axios from 'axios';

export const postLogin =()=>dispatch => {
        console.log("axios data")
        let data = {username: 'saxatachi' ,password:'lublin97'}
        axios.post('http://127.0.0.1:8000/api/login/',data)
        .then(res=> dispatch({
            type: POST_LOGIN,
            payload: res.data.token,
        }));
    
}