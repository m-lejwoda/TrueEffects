import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCheckCircle,faTimesCircle} from '@fortawesome/fontawesome-free-solid';
import ModalDisplayTrainingItem from './modaldisplaytraining/ModalDisplayTrainingItem'
import '../sass/modaldisplaytraining.scss';
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#457B9D',
    padding: '50px',
    zIndex: 10
}
const OVERLAY_STYLES = {
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex:10,
    color: 'rgba(0,0,0)',
}
const ModalDisplayTraining = props => {
    const handleMovetoTraining = () =>{
        props.allprops.history.push({pathname:'/training',training:props.alldata});
    }
    return ReactDOM.createPortal(
        <div className="modaldisplaytraining" style={OVERLAY_STYLES}>
            <div className="modaldisplaytraining__data" style={MODAL_STYLES}>
            <div className="modaldisplaytraining__data-close" ><span><FontAwesomeIcon onClick={()=>props.back()} icon={faTimes}/></span></div>
            <div className="modaldisplaytraining__data-title">{props.title}</div>
            <div className="modaldisplaytraining__data__datetime">
                <div className="modaldisplaytraining__data__datetime-time">Czas trwania treningu : {props.time}</div>
                <div className="modaldisplaytraining__data__datetime-date">{props.date}</div>
            </div>
            <div className="modaldisplaytraining__data-completed"></div>
            <div className="modaldisplaytraining__data-description">{props.description}</div>
            <div className="modaldisplaytraining__data__buttons">
            <div className="modaldisplaytraining__data__buttons-button">
                <button onClick={handleMovetoTraining}>Powtórz trening</button>
            </div>
            <div className="modaldisplaytraining__data__buttons-button">
                <button>Dodaj trening do innego dnia</button>
            </div>
            </div>
            <div className="modaldisplaytraining__data__elements">
                <table id="training">
                <tr>
                    <th>Nazwa Ćwiczenia</th>
                    <th>Liczba Powtórzeń</th>
                    <th>Zakładana liczba Powtórzeń</th>
                    <th>Przerwa między seriami</th>
                    <th>Ciężar</th>
                    <th>Fazy</th>
                </tr>
                    {props.training.map((training)=> <ModalDisplayTrainingItem training={training} />)}
                </table>
            </div>
        </div>
        </div>,
        document.getElementById('root')
    );
};

export default ModalDisplayTraining;