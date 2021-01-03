import React from 'react';

const ModalDisplayTrainingItem = (props) => {
    console.log(props.training)
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
                <td>Pompki Diamentowe</td>
                <td>23</td>
                <td>23</td>
                <td>{props.training.rest}</td>
                <td>11 kg</td>
                <td>{props.training.concentric_phase}/{props.training.pause_after_concentric_phase}/{props.training.eccentric_phase}/{props.training.pause_after_eccentric_phase}</td>
            </tr>
        </>
    );
};
export default ModalDisplayTrainingItem;