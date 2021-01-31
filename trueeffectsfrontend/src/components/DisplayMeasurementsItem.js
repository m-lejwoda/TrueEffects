import React from 'react';

const DisplayMeasurementsItem = (props) => {
    console.log(props.measurement)
    return (
        <div className="displaymeasurements__containers__container">
                    
                    <div className="displaymeasurements__containers__container__elements">
                        <div className="displaymeasurements__containers__container__elements-date">Data : {props.measurement.date}</div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Waga</div>
                            <div className="displaymeasurements__containers__container__elements__element-result">{props.measurement.weight}</div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Wzrost</div>
                            <div className="displaymeasurements__containers__container__elements__element-result"></div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Prawy biceps</div>
                            <div className="displaymeasurements__containers__container__elements__element-result">{props.measurement.right_biceps}</div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Lewy biceps</div>
                            <div className="displaymeasurements__containers__container__elements__element-result">{props.measurement.left_biceps}</div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Prawe przedramię</div>
                            <div className="displaymeasurements__containers__container__elements__element-result">{props.measurement.right_forearm}</div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Lewe przedramię</div>
                            <div className="displaymeasurements__containers__container__elements__element-result">{props.measurement.left_forearm}</div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Prawe udo</div>
                            <div className="displaymeasurements__containers__container__elements__element-result">{props.measurement.right_leg}</div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Lewe udo</div>
                            <div className="displaymeasurements__containers__container__elements__element-result">{props.measurement.left_leg}</div>
                        </div>
                    </div>
                </div>
    );
};

export default DisplayMeasurementsItem;