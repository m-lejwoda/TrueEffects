import {POST_LOGOUT,GET_TIME,GET_TIME_SUCCESS,AUTH_ERROR,GET_MEASUREMENTS_SUCCESS,GET_MEASUREMENTS,POST_TRAINING,GET_TRAININGS, GET_TRAININGS_SUCCESS,GET_GOALS,GET_GOALS_SUCCESS,POST_MEASUREMENT,POST_MEASUREMENT_SUCCESS, GET_EXERCISES,GET_EXERCISES_SUCCESS} from './types';
import axios from 'axios';

export const getTime = (time)=>(dispatch) =>{
    dispatch({type: GET_TIME})
    dispatch({
        type: GET_TIME_SUCCESS,
        payload: time
    })
}
export const getMeasurements =(token)=>(dispatch,getState) => {
    dispatch({type: GET_MEASUREMENTS})
    let token = getState().authentication.token
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/display_personal_dimensions/')
    .then(res=> dispatch({
        type: GET_MEASUREMENTS_SUCCESS,
        payload: res,
    }));
}
export const getExercises = () =>(dispatch,getState)=>{
    let token = window.localStorage.getItem('token')
    if (token === null){
        token = getState().authentication.token
    }
    dispatch({type: GET_EXERCISES})
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/display_exercises/')
    .then(res=> dispatch({
        type: GET_EXERCISES_SUCCESS,
        payload: res,
    }));
}


export const postTraining = (data) => (dispatch,getState) => {
    let token = window.localStorage.getItem('token')
    if (token === null){
        token = getState().authentication.token
    }
    console.log(data)
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.post('http://127.0.0.1:8000/api/create_training/',data)
    .then(res=>{
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err.response)
    })
    
}
export const getTrainings = (token) => (dispatch,getState) =>{
    dispatch({type: GET_TRAININGS})
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/display_training/')
    .then(res => dispatch({
        type: GET_TRAININGS_SUCCESS,
        payload: res,
    }));
}
export const getGoals = (token) => (dispatch,getState) =>{
    dispatch({type: GET_GOALS})
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/display_description_goals/')
    .then(res => dispatch({
        type: GET_GOALS_SUCCESS,
        payload: res,
    }));
}
export const postGoals = (data) => (dispatch,getState) => {
    let token = window.localStorage.getItem('token')
    if (token === null){
        token = getState().authentication.token
    }
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.post('http://127.0.0.1:8000/api/create_description_goals/',data)
    .then(res=>{
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err.response)
    })
    
}
export const postMeasurement = (data) => (dispatch,getState) =>{
    let token = getState().authentication.token
    console.log(data)
    dispatch({type: POST_MEASUREMENT})
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.post('http://127.0.0.1:8000/api/create_personal_dimensions/',data)
    .then(res=>dispatch({
        type: POST_MEASUREMENT_SUCCESS,
    }))
    .catch(err=>{
        console.log(err.response)
    })

}
