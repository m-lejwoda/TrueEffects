import React,{useState} from 'react';
import CreateTrainingItem from './CreateTrainingItem';
import '../sass/createtraining.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/fontawesome-free-solid';
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
import pl from "date-fns/locale/pl";
const CreateTraining = (props) => {
    registerLocale('pl',pl)
    const [startDate, setStartDate] = useState(new Date());
    const [activediv , setActivediv] = useState(null)
    const [ownexercise,setOwnExercise] = useState('')
    const [exercise,setExercise] = useState('')
    const [series,setSeries] = useState(1)
    const [assumedreps,setAssumedReps] = useState(1)
    const [rest,setRest] = useState(60)
    const [weight,setWeight] = useState(0)
    const [concentricphase,setConcentricPhase] = useState(0)
    const [pauseconcentricphase,setPauseConcentricPhase] = useState(0)
    const [eccentricphase,setEccentricPhase] = useState(0)
    const [pauseeccentricphase,setPauseEccentricPhase] = useState(0)
    const [items,setItems] = useState([])
    const addElementtoItems = () =>{
        setItems(prevItems => [...prevItems, {
            exercise : {exercise},
            ownexercise: {ownexercise},
            series: {series},
            assumedreps: {assumedreps},
            rest: {rest},
            weight: {weight},
            concentricphase:{concentricphase},
            pauseconcentricphase:{pauseconcentricphase},
            eccentricphase:{eccentricphase},
            pauseeccentricphase:{pauseeccentricphase}
          }]);
    }
    const clearState = () =>{
        setSeries(1)
        setAssumedReps(1)
        setRest(60)
        setWeight(0)
        setConcentricPhase(0)
        setPauseConcentricPhase(0)
        setEccentricPhase(0)
        setPauseEccentricPhase(0)
    }
    const handleClickExercise = (e) =>{
        if(activediv !== null){
            activediv.style.background = "#457B9D"
        }
        setActivediv(e.target)
        setExercise(e.target.textContent)
        e.target.style.background = '#db3d44'
    }
    const handleClickSelect = () =>{
        console.log("handleClickSelect")
        for(let i=0;i<series;i++){
            addElementtoItems()
        }
        clearState()
    }
    const handleAcceptTraining = () => {
        console.log("handleAcceptTraining")
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
                        {props.exercises.map((element)=><div className="createtraining__containers__first__exercises__element " onClick={handleClickExercise}>{element.name}</div>)}
                    </div>
                    <div className="createtraining__containers__first__trainingdata">
                        <div className="createtraining__containers__first__trainingdata__series">Podaj liczbę serii danego ćwiczenia *<span><input placeholder={series}  onChange={(e)=>setSeries(parseInt(e.target.value))}/></span></div>
                        <div className="createtraining__containers__first__trainingdata__singleseries">Podaj liczbę powtórzeń danego ćwiczenia *<span><input placeholder={assumedreps} onChange={(e)=>setAssumedReps(parseInt(e.target.value))} /></span></div>
                        <div className="createtraining__containers__first__trainingdata__rest">Podaj czas odpoczynku w (s) *<span><input placeholder={rest} onChange={(e)=>setRest(parseInt(e.target.value))}/></span></div>
                        <div className="createtraining__containers__first__trainingdata__weight">Podaj ciężar w kg(domyślnie 0) <span><input placeholder={weight} onChange={(e)=>setWeight(parseInt(e.target.value))}/></span></div>
                        <div className="createtraining__containers__first__trainingdata__concentricphase">Czas fazy koncentrycznej <span><input placeholder={concentricphase} onChange={(e)=>setConcentricPhase(parseInt(e.target.value))}/></span></div>
                        <div className="createtraining__containers__first__trainingdata__pauseafterconcentricphase">Czas pauzy po fazie koncentrycznej <span><input placeholder={pauseconcentricphase} onChange={(e)=>setPauseConcentricPhase(parseInt(e.target.value))}/></span></div>
                        <div className="createtraining__containers__first__trainingdata__eccentricphase">Czas fazy ekscentrycznej <span><input placeholder={eccentricphase} onChange={(e)=>setEccentricPhase(parseInt(e.target.value))}/></span></div>
                        <div className="createtraining__containers__first__trainingdata__pauseaftereccentricphase">Czas pauzy po fazie ekscentrycznej <span><input placeholder={pauseeccentricphase} onChange={(e)=>setPauseEccentricPhase(parseInt(e.target.value))}/></span></div>
                    </div>
                </div>
                <div className="createtraining__containers__second">
                    <div className="createtraining__containers__second-select" onClick={handleClickSelect}>Wybierz <span> <FontAwesomeIcon icon={faArrowRight} /></span></div>
                    <div className="createtraining__containers__second-accepttraining" onClick={handleAcceptTraining}>Zaakceptuj trening</div>

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
                                {/* <tr>
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
                                </tr> */}
                                {items.length > 0 ? items.map((item)=>{
                                    console.log(item)
                                    return(
                                    <tr>
                                        <td>{item.exercise.exercise}</td>
                                        <td><span><input placeholder="12"/></span></td> 
                                    </tr>)
                                })
                                :<tr>
                                        
                                    </tr>}
                                

                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
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
export default connect(mapStateToProps)(CreateTraining); 