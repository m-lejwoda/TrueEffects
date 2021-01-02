import {GET_MEASUREMENTS,GET_MEASUREMENTS_SUCCESS,POST_TRAINING,GET_TRAININGS,GET_TRAININGS_FAILURE,GET_TRAININGS_SUCCESS,GET_GOALS,GET_GOALS_SUCCESS} from '../actions/types';

const initialState = {
    measurements: [],
    trainings: [],
    goals:[],
    loadingtrainings: false,
    loadedtrainings: false,
    loadingmeasurements: false,
    loadedmeasurements: false,
    loadinggoals: false,
    loadedgoals:false,
    
};
export default function trainreducer(state=initialState,action){
    switch(action.type){
        case GET_MEASUREMENTS:
            return{
                ...state,
                loadingmeasurements:true,
            }
        case GET_MEASUREMENTS_SUCCESS:
            return{
                ...state,
                measurements:action.payload,
                loadingmeasurements:false,
                loadedmeasurements:true
            }
        case GET_TRAININGS:
            return{
                ...state,
                loadingtrainings:true,
            
            }
        case GET_TRAININGS_SUCCESS:
            return{
                ...state,
                trainings:action.payload,
                loadingtrainings:false,
                loadedtrainings:true
            }
        case GET_GOALS:
            return{
                ...state,
                loadinggoals:true
            }
        case GET_GOALS_SUCCESS:
            return{
                ...state,
                goals:action.payload,
                loadinggoals:false,
                loadedgoals:true

            }
        case POST_TRAINING:
            return{
                ...state
            }
        default: 
            return state;
    }
}