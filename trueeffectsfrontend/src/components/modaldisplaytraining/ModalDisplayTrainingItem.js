import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
const ModalDisplayTrainingItem = (props) => {
    console.log("props treningowy")
    console.log(props.training)
    const [exercise,setExercise] = useState("")
    useEffect(() => {
            let tempexercise = props.exercises.find(function (element) {
                return element.id === props.training.exercise })
            setExercise(tempexercise.name)
        },[]);
    return (
        // <div className="modaldisplaytraining__data__elements__element">
        //     <div className="modaldisplaytraining__data__elements__element-name">Pompki Diamentowe</div>
        //     <div className="modaldisplaytraining__data__elements__element-reps">23</div>
        //     <div className="modaldisplaytraining__data__elements__element-assumedreps">23</div>
        //     <div className="modaldisplaytraining__data__elements__element-rest"> X {props.training.rest} </div>
        //     <div className="modaldisplaytraining__data__elements__element-weight"> ciężar {props.training.weight} kg </div>
        //     <div className="modaldisplaytraining__data__elements__element-phases"> fazy {props.training.concentric_phase}/{props.training.pause_after_concentric_phase}/{props.training.eccentric_phase}/{props.training.pause_after_eccentric_phase}</div>
        // </div>
        <>
            <tr>
                <td>{exercise}</td>
                <td>{props.training.reps.length}</td>
                <td>{props.training.rest}</td>
                <td>{props.training.weight} kg</td>
                <td>{props.training.concentric_phase}/{props.training.pause_after_concentric_phase}/{props.training.eccentric_phase}/{props.training.pause_after_eccentric_phase}</td>
            </tr>
        </>
    );
};
const mapStateToProps = (state) => {
    return{
        trainings: state.training.trainings.data,
        loadedtrainings: state.training.loadedtrainings,
        measurements: state.training.measurements.data,
        goals: state.training.goals.data,
        exercises: state.training.exercises.data
    }
}
export default connect(mapStateToProps)(ModalDisplayTrainingItem); 
