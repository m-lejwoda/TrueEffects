import {GET_MEASUREMENTS_SUCCESS,GET_MEASUREMENTS,POST_TRAINING,GET_TRAININGS, GET_TRAININGS_SUCCESS,GET_GOALS,GET_GOALS_SUCCESS} from './types';
import axios from 'axios';

export const getMeasurements =()=>dispatch => {
    dispatch({type: GET_MEASUREMENTS})
    axios.defaults.headers.common['Authorization'] = 'Token 77fda14fbf9a14050c1ff68921bc780833e3f704'
    axios.get('http://127.0.0.1:8000/api/display_personal_dimensions/')
    .then(res=> dispatch({
        type: GET_MEASUREMENTS_SUCCESS,
        payload: res,
    }));
}
export const postTraining = () => dispatch => {
    let data = {username: 'saxatachi' ,password:'lublin97'}
    axios.defaults.headers.common['Authorization'] = 'Token 77fda14fbf9a14050c1ff68921bc780833e3f704'
    axios.post('http://127.0.0.1:8000/api/create_single_series/',data)
    .then(res => console.log(res.data))
}
export const getTrainings = () => dispatch =>{
    dispatch({type: GET_TRAININGS})
    axios.defaults.headers.common['Authorization'] = 'Token 77fda14fbf9a14050c1ff68921bc780833e3f704'
    axios.get('http://127.0.0.1:8000/api/display_training/')
    .then(res => dispatch({
        type: GET_TRAININGS_SUCCESS,
        payload: res,
    }));
}

export const getGoals = () => dispatch =>{
    dispatch({type: GET_GOALS})
    axios.defaults.headers.common['Authorization'] = 'Token 77fda14fbf9a14050c1ff68921bc780833e3f704'
    axios.get('http://127.0.0.1:8000/api/display_description_goals/')
    .then(res => dispatch({
        type: GET_GOALS_SUCCESS,
        payload: res,
    }));
}
