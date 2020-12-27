import React from 'react';

const DisplayMeasurements = () => {
    return (
        <div className="displaymeasurements">
            <div className="displaymeasurements-title">Twoje ostatnie 9 pomiarów</div>
            <div className="displaymeasurements__containers">
                <div className="displaymeasurements__containers__container">
                    <div className="displaymeasurements__containers__container-data"></div>
                    <div className="displaymeasurements__containers__container__elements">
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Waga</div>
                            <div className="displaymeasurements__containers__container__elements__element-result"></div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Wzrost</div>
                            <div className="displaymeasurements__containers__container__elements__element-result"></div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Prawy biceps</div>
                            <div className="displaymeasurements__containers__container__elements__element-result"></div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Lewy biceps</div>
                            <div className="displaymeasurements__containers__container__elements__element-result"></div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Prawe przedramię</div>
                            <div className="displaymeasurements__containers__container__elements__element-result"></div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Lewe przedramię</div>
                            <div className="displaymeasurements__containers__container__elements__element-result"></div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Prawe udo</div>
                            <div className="displaymeasurements__containers__container__elements__element-result"></div>
                        </div>
                        <div className="displaymeasurements__containers__container__elements__element">
                            <div className="displaymeasurements__containers__container__elements__element-name">Lewe udo</div>
                            <div className="displaymeasurements__containers__container__elements__element-result"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default DisplayMeasurements;