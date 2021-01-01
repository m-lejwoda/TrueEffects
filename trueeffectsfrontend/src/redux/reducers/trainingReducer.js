import {GET_MEASUREMENTS,POST_TRAINING,GET_TRAININGS,GET_TRAININGS_FAILURE,GET_TRAININGS_SUCCESS} from '../actions/types';

const initialState = {
    measurements: [],
    trainings: [],
    loadingtrainings: false,
    loadedtrainings: false,
    
};
export default function trainreducer(state=initialState,action){
    switch(action.type){
        case GET_MEASUREMENTS:
            return{
                ...state,
                measurements:action.payload,
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
        case POST_TRAINING:
            return{
                ...state
            }
        default: 
            return state;
    }
}