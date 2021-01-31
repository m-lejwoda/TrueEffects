import React from 'react';
import '../sass/displaymeasurements.scss';
import {connect} from 'react-redux';
import DisplayMeasurementsItem from './DisplayMeasurementsItem';
const DisplayMeasurements = (props) => {
    let reverse = props.measurements.slice(8).reverse()
    return (
        <div className="displaymeasurements">
            <div className="displaymeasurements-title">Twoje ostatnie 9 pomiarów</div>
            <div className="displaymeasurements__containers">
                {reverse.map((measurement)=><DisplayMeasurementsItem measurement={measurement}/>)}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        trainings: state.training.trainings.data,
        loadedtrainings: state.training.loadedtrainings,
        measurements: state.training.measurements.data,
        goals: state.training.goals.data
    }
}
export default connect(mapStateToProps)(DisplayMeasurements); 
