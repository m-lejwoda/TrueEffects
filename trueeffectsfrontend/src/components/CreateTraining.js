import React,{useState,useRef} from 'react';
import CreateTrainingItem from './CreateTrainingItem';
import '../sass/createtraining.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/fontawesome-free-solid';
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
import pl from "date-fns/locale/pl";
import { postTraining } from '../redux/actions/trainingActions';
const CreateTraining = (props) => {
    registerLocale('pl',pl)
    const [startDate, setStartDate] = useState(new Date());
    const [activediv , setActivediv] = useState(null)
    const [ownexercise,setOwnExercise] = useState('')
    const [exercise,setExercise] = useState({id: '', name:''})
    const [series,setSeries] = useState(1)
    const [assumedreps,setAssumedReps] = useState(1)
    const [rest,setRest] = useState(60)
    const [weight,setWeight] = useState(0)
    const [concentricphase,setConcentricPhase] = useState(0)
    const [pauseconcentricphase,setPauseConcentricPhase] = useState(0)
    const [eccentricphase,setEccentricPhase] = useState(0)
    const [pauseeccentricphase,setPauseEccentricPhase] = useState(0)
    const [itemsplaceholders,setItemsPlaceHolders] = useState([])
    const [items,setItems] = useState([])
    const name_of_training = useRef(null);
    const training_description = useRef(null);
    const training_date = useRef(null);
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
        // console.log("clear state")
        setSeries(1)
        // setAssumedReps(1)
        // setRest(60)
        // setWeight(0)
        // setConcentricPhase(0)
        // setPauseConcentricPhase(0)
        // setEccentricPhase(0)
        // setPauseEccentricPhase(0)
    }
    const handleClickExercise = (e,element) =>{
        console.log(element)
        console.log(element.id)
        console.log(element.name)
        if(activediv !== null){
            activediv.style.background = "#457B9D"
        }
        setActivediv(e.target)
        setExercise({id:element.id})
        setExercise({name:element.name})
        e.target.style.background = '#db3d44'
    }
    const handleClickSelect = (e) =>{
        
        for(let i=0;i<series;i++){
            setItemsPlaceHolders(oldArray => [...oldArray, assumedreps])
            addElementtoItems()
        }
        clearState()
    }
    const handleChangeinTrainingItems = (e,element) =>{
        let assumed = {"assumedreps" : e.target.value}
        items[element.id].assumedreps = assumed
        
    }
    const handleAcceptTraining = () => {
        let date = new Date(training_date.current.input.value)
        let splitdate = training_date.current.input.value.split("/")
        // let year = date.getFullYear() 
        // let month = date.getMonth() 
        // let day = date.getDay() 
        // let fullday = year + "-" + month + "-" + day
        let fullday = splitdate[2] + "-" + splitdate[1] + "-" +  splitdate[0]
        console.log("fullday")
        console.log(fullday)

        let array = {
            name: name_of_training.current.value,
            description: training_description.current.value,
            date: fullday,
            user: 1,
            training: []
        }
        let allobjects = []
        for(let i=0;i<items.length;i++){
            let objects = {reps: []}
            // for(let j=0;j<props.exercises.length;j++){
            //     if (items[i].exercise.exercise === props.exercises[j].name){
            //         objects["exercise"] = props.exercises[j].id
            //     } 
            // }
            objects["exercise"] = exercise
            objects["pause_after_concentric_phase"]=items[i].pauseconcentricphase.pauseconcentricphase
            objects["pause_after_eccentric_phase"]=items[i].pauseeccentricphase.pauseeccentricphase
            objects["weight"] = items[i].weight.weight
            objects["series"] = items[i].series.series
            objects["rest"] = items[i].rest.rest
            for(let j=0;j<items[i].series.series;j++){
                objects["reps"].push({reps: items[i].assumedreps.assumedreps})
            }
            array["training"].push(objects)
            allobjects.push(objects)

        }
        props.postTraining(array)
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
                        {props.exercises.map((element)=><div className="createtraining__containers__first__exercises__element "onClick={(e)=>handleClickExercise(e,element)}>{element.name}</div>)}
                    </div>
                    <div className="createtraining__containers__first__trainingdata">
                        <div className="createtraining__containers__first__trainingdata__series">Podaj liczbę serii danego ćwiczenia *<span><input placeholder={series} value={series} onChange={(e)=>setSeries(parseInt(e.target.value))}/></span></div>
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
                    <div className="createtraining__containers__third-title"><span><input ref={name_of_training} placeholder="Nazwa treningu"/></span></div>
                    <div className="createtraining__containers__third-date"><span>
                    <DatePicker ref={training_date} locale='pl' dateFormat='dd/MM/yyyy' selected={startDate} onChange={date => setStartDate(date)} />
                        </span></div>
                    <div className="createtraining__containers__third-description"><span><input ref={training_description} placeholder="Opis"/></span></div>
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
                                {items.length > 0 ? items.map((item,id)=>{
                                    // console.log(id)
                                    // console.log(item)
                                    return(
                                    <tr>
                                        <td>{item.exercise.exercise.name}</td>
                                        <td ><span><input  placeholder={itemsplaceholders[id]} onChange={(e)=>handleChangeinTrainingItems(e,{id})}/></span></td> 
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
export default connect(mapStateToProps,{postTraining})(CreateTraining); 