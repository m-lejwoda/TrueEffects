import {POST_LOGOUT,GET_TIME,GET_TIME_SUCCESS,AUTH_ERROR,GET_MEASUREMENTS_SUCCESS,GET_MEASUREMENTS,POST_TRAINING,GET_TRAININGS,
     GET_TRAININGS_SUCCESS,GET_GOALS,GET_GOALS_SUCCESS,POST_MEASUREMENT,POST_MEASUREMENT_SUCCESS, GET_EXERCISES,GET_EXERCISES_SUCCESS,GET_OWN_EXERCISES_SUCCESS} from './types';
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
    return axios.get('http://127.0.0.1:8000/api/display_personal_dimensions/')
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
    axios.get('http://127.0.0.1:8000/api/display_own_exercise/')
    .then(res=>dispatch({
        type: GET_OWN_EXERCISES_SUCCESS,
        payload: res.data
    }))
    .then(
    axios.get('http://127.0.0.1:8000/api/display_exercises/')
    .then(res=> dispatch({
        type: GET_EXERCISES_SUCCESS,
        payload: res,
    })));
}
export const postTraining = (data) => async(dispatch,getState) => {
    let token = window.localStorage.getItem('token')
    if (token === null){
        token = getState().authentication.token
    }
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    return await axios.post('http://127.0.0.1:8000/api/create_training/',data)
    .catch(err=>{
        alert("Nieudało się dodać treningu popraw błędy")
    })
    
}
export const getTrainings = () => (dispatch,getState) =>{
    dispatch({type: GET_TRAININGS})
    let token = getState().authentication.token
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    return axios.get('http://127.0.0.1:8000/api/display_training/')
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
    dispatch({type: POST_MEASUREMENT})
    let token = getState().authentication.token
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    return axios.post('http://127.0.0.1:8000/api/create_personal_dimensions/',data)
    .then(res=>dispatch({
        type: POST_MEASUREMENT_SUCCESS,
    }))
    .catch(err=>{
        console.log(err.response)
    })

}

export const postOwnExercise = (data) => (dispatch,getState) =>{
    let token = getState().authentication.token
    let dictdata = {"name": data}
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.post('http://127.0.0.1:8000/api/create_own_exercise/',dictdata)
    .catch(err=>{
        alert("Wystąpił błąd")
    })
}
export const deleteTraining = pk =>(dispatch,getState)=>{
    let token = getState().authentication.token
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    return axios.delete(`http://127.0.0.1:8000/api/deleteTraining/${pk}`)
    .then(res => {
        alert("Trening został usunięty")
    })
    .catch("Wystąpił problem z usunięciem treningu")

}
export const deleteMeasurement = pk =>(dispatch,getState)=>{
    let token = getState().authentication.token
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    return axios.delete(`http://127.0.0.1:8000/api/deleteMeasurement/${pk}`)
    .then(res => {
        alert("Trening został usunięty")
    })
    .catch("Wystąpił problem z usunięciem treningu")

}