import React,{useState} from 'react';
import '../sass/createtraining.scss';

const CreateTraining = () => {
    return (
        <div className="createtraining">
            <div className="createtraining-title">Kreator treningu</div>
            <div className="createtraining__containers">
                <div className="createtraining__containers__first">
                    <div className="createtraining__containers__first__selectors">
                        <div className="createtraining__containers__first__selectors-globalexercise">Ćwiczenia</div>
                        <div className="createtraining__containers__first__selectors-myexercise">Moje Ćwiczenia</div>
                    </div>
                    <div className='createtraining__containers__first-input'>Wyszukaj ćwiczenie</div>
                    <div className="createtraining__containers__first__exercises">
                        <div className="createtraining__containers__first__exercises__element">Pompki zwykłe</div>
                        <div className="createtraining__containers__first__exercises__element">Pompki Diamentowe</div>
                        <div className="createtraining__containers__first__exercises__element">Podciąganie</div>
                    </div>
                    <div className="createtraining__containers__first__trainingdata">
                        <div className="createtraining__containers__first__trainingdata__series">Podaj liczbę serii danego ćwiczenia <span><input placeholder="1"/></span></div>
                        <div className="createtraining__containers__first__trainingdata__singleseries">Podaj liczbę powtórzeń danego ćwiczenia <span><input placeholder="1"/></span></div>
                        <div className="createtraining__containers__first__trainingdata__rest">Podaj czas odpoczynku w (s) <span><input placeholder="60"/></span></div>
                        <div className="createtraining__containers__first__trainingdata__weight">Podaj ciężar w kg(domyślnie 0) <span><input placeholder="0"/></span></div>
                        <div className="createtraining__containers__first__trainingdata__concentricphase">Czas fazy koncentrycznej <span><input placeholder="0"/></span></div>
                        <div className="createtraining__containers__first__trainingdata__pauseafterconcentricphase">Czas pauzy po fazie koncentrycznej <span><input placeholder="0"/></span></div>
                        <div className="createtraining__containers__first__trainingdata__eccentricphase">Czas fazy ekscentrycznej <span><input placeholder="0"/></span></div>
                        <div className="createtraining__containers__first__trainingdata__pauseaftereccentricphase">Czas pauzy po fazie ekscentrycznej <span><input placeholder="0"/></span></div>
                    </div>
                </div>
                <div className="createtraining__containers__second">
                    <div className="createtraining__containers__second-select">Wybierz </div>
                    <div className="createtraining__containers__second-accepttraining">Zaakceptuj trening</div>

                </div>
                <div className="createtraining__containers__third">
                    <div className="createtraining__containers__third-title">Nazwa treningu</div>
                    <div className="createtraining__containers__third-data">Data wykonania treningu</div>
                    <div className="createtraining__containers__third-description">Opis</div>
                    <div className="createtraining__containers__third__elements">
                        <div className="createtraining__containers__third__elements-title">
                            Ćwiczenia
                        </div>
                        <div className="createtraining__containers__third__elements__element">
                            <div className="createtraining__containers__third__elements__element-name">Pompki diamentowe</div>
                            <div className="createtraining__containers__third__elements__element-reps">12</div>
                            <div className="createtraining__containers__third__elements__element-rest">12</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreateTraining;