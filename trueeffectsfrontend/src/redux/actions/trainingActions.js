import {POST_LOGOUT,GET_MEASUREMENTS_SUCCESS,GET_MEASUREMENTS,POST_TRAINING,GET_TRAININGS, GET_TRAININGS_SUCCESS,GET_GOALS,GET_GOALS_SUCCESS,POST_MEASUREMENT,POST_MEASUREMENT_SUCCESS, GET_EXERCISES,GET_EXERCISES_SUCCESS} from './types';
import axios from 'axios';

export const getMeasurements =()=>(dispatch) => {
    let token = window.localStorage.getItem('token')
    
    dispatch({type: GET_MEASUREMENTS})
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/display_personal_dimensions/')
    .then(res=> dispatch({
        type: GET_MEASUREMENTS_SUCCESS,
        payload: res,
    }));
}
export const getExercises = () =>(dispatch)=>{
    let token = window.localStorage.getItem('token')
    dispatch({type: GET_EXERCISES})
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/display_exercises/')
    .then(res=> dispatch({
        type: GET_EXERCISES_SUCCESS,
        payload: res,
    }));
}


export const postTraining = (data) => dispatch => {
    let token = window.localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.post('http://127.0.0.1:8000/api/create_training/',data)
    .then(res=>{
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err.response)
    })
    
}
export const getTrainings = () => dispatch =>{
    let token = window.localStorage.getItem('token')
    console.log(token)
    dispatch({type: GET_TRAININGS})
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/display_training/')
    .then(res => dispatch({
        type: GET_TRAININGS_SUCCESS,
        payload: res,
    }));
}
export const getGoals = () => dispatch =>{
    let token = window.localStorage.getItem('token')
    console.log(token)
    dispatch({type: GET_GOALS})
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/display_description_goals/')
    .then(res => dispatch({
        type: GET_GOALS_SUCCESS,
        payload: res,
    }));
}
export const postGoals = (data) => dispatch => {
    let token = window.localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.post('http://127.0.0.1:8000/api/create_description_goals/',data)
    .then(res=>{
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err.response)
    })
    
}
export const postMeasurement = (data) => dispatch =>{
    let token = window.localStorage.getItem('token')
    dispatch({type: POST_MEASUREMENT})
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.post('http://127.0.0.1:8000/api/create_personal_dimensions/',data)
    .then(res=>dispatch({
        type: POST_MEASUREMENT_SUCCESS,
    }))
}
export const postLogout = ()=> dispatch =>{
    let token = window.localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/logout/')
    .then(res=>dispatch({
        type: POST_LOGOUT,
    }))
    .then(res=>{
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('username')
    })
}