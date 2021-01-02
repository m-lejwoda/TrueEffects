import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight,faTimes} from '@fortawesome/fontawesome-free-solid';
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
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
    zIndex:10
}

const ModalDisplayTraining = props => {
    console.log("propsy modalowe")
    console.log(props.training)
    return ReactDOM.createPortal(
        <div className="modaldisplaytraining" style={OVERLAY_STYLES}>
            <div className="modaldisplaytraining__data" style={MODAL_STYLES}>
            <div className="modaldisplaytraining__data-close" onClick={()=>props.back()}><FontAwesomeIcon icon={faTimes}/></div>
            <div className="modaldisplaytraining__data-title">Tytuł</div>
            <div className="modaldisplaytraining__data-time"></div>
            <div className="modaldisplaytraining__data-data"></div>
            <div className="modaldisplaytraining__data-description"></div>
            <div className="modaldisplaytraining__data__elements">
                <div className="modaldisplaytraining__data__elements__element">
                    
                </div>
            </div>
        </div>
        </div>,
        document.getElementById('root')
    );
};

export default ModalDisplayTraining;