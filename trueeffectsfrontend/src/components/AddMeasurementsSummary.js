import React from 'react';
import Logo from './Logo';
import '../sass/addmeasurementssummary.scss';
import {connect} from 'react-redux';
import {getMeasurements} from '../redux/actions/trainingActions';

const AddMeasurementsSummary = (props) => {
    console.log(props.newdata)
    console.log(props.measurements)
    return (
        <div className="addmeasurementssummary">
            <Logo />
            <div className="addmeasurementssummary-title">Właśnie zaaktualizowałeś swoje pomiary</div>
            <div className="addmeasurementssummary-secondtitle">Zmiany:</div>
            <div className="addmeasurementssummary__elements">
                <div className="addmeasurementssummary__elements__element" style={{color: 'green'}} >Waga <span>81-82</span></div>
                <div className="addmeasurementssummary__elements__element" style={{color: 'green'}}>Wzrost <span>180-182</span></div>
                <div className="addmeasurementssummary__elements__element">Lewy biceps <span>6-6</span></div>
                <div className="addmeasurementssummary__elements__element">Prawy biceps <span>6-6</span></div>
                <div className="addmeasurementssummary__elements__element">Lewe przedramię <span>6-6</span></div>
                <div className="addmeasurementssummary__elements__element">Prawe przedramię <span>6-6</span></div>
                <div className="addmeasurementssummary__elements__element">Lewa noga <span>6-6</span></div>
                <div className="addmeasurementssummary__elements__element">Prawa noga <span>6-6</span></div>
                <div className="addmeasurementssummary__elements__element"></div>
            </div>
            <div className="addmeasurementssummary__button">
                <button>Dalej</button>
            </div>
            

        </div>
    );
};
const mapStateToProps = (state) => {
    return{
        
        measurements: state.training.measurements.data,
        
    }
}
export default connect(mapStateToProps,{getMeasurements})(AddMeasurementsSummary);