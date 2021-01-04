import React,{useState} from 'react';
import '../sass/createtraining.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/fontawesome-free-solid';
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from "date-fns/locale/pl";
const CreateTraining = () => {
    registerLocale('pl',pl)
    const [startDate, setStartDate] = useState(new Date());
    const [activediv , setActivediv] = useState(null)
    const handleClickExercise = (e) =>{
        if(activediv !== null){
            activediv.style.background = "#457B9D"
        }
        setActivediv(e.target)
        e.target.style.background = '#db3d44'
    }
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
                        <div className="createtraining__containers__first__exercises__element " onClick={handleClickExercise}>Pompki zwykłe</div>
                        <div className="createtraining__containers__first__exercises__element" onClick={handleClickExercise}>Pompki Diamentowe</div>
                        <div className="createtraining__containers__first__exercises__element" onClick={handleClickExercise}>Podciąganie</div>
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
                    <div className="createtraining__containers__second-select">Wybierz <span> <FontAwesomeIcon icon={faArrowRight} /></span></div>
                    <div className="createtraining__containers__second-accepttraining">Zaakceptuj trening</div>

                </div>
                <div className="createtraining__containers__third">
                    <div className="createtraining__containers__third-title"><span><input placeholder="Nazwa treningu"/></span></div>
                    <div className="createtraining__containers__third-date"><span>
                    <DatePicker locale='pl' dateFormat='dd/MM/yyyy' selected={startDate} onChange={date => setStartDate(date)} />
                        </span></div>
                    <div className="createtraining__containers__third-description"><span><input placeholder="Opis"/></span></div>
                    <div className="createtraining__containers__third__elements">
                        <div className="createtraining__containers__third__elements-title">
                            Ćwiczenia
                        </div>
                        <div className="createtraining__containers__third__elements__element">
                            <table id="exercisetable">
                                <tr>
                                    <th>Ćwiczenie</th>
                                    <th>Powtórzenia</th>
                                    
                                </tr>
                                <tr>
                                    <td>Pompki Diamentowe</td>
                                    <td><span><input placeholder="12"/></span></td>
                                    
                                </tr>
                                <tr>
                                    <td>Pompki Zwykłe</td>
                                    <td><span><input placeholder="12"/></span></td>
                                    
                                </tr>
                                <tr>
                                    <td>Pompki Szerokie</td>
                                    <td><span><input placeholder="12"/></span></td>
                                </tr>
                                <tr>
                                    <td>Podciąganie</td>
                                    <td><span><input placeholder="12"/></span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreateTraining;