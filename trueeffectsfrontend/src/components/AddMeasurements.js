import React,{useState} from 'react';
import '../sass/addmeasurements.scss';
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from "date-fns/locale/pl";
import {connect} from 'react-redux';
import {postMeasurement,getMeasurements} from '../redux/actions/trainingActions';
import AddMeasurementsSummary from './AddMeasurementsSummary';
const AddMeasurements = (props) => {
    console.log("addMeasurements")
    console.log(props.measurements)
    const [weight,setWeight] = useState(0)
    const [growth,setGrowth] = useState(0)
    const [leftbiceps,setLeftBiceps] = useState(0)
    const [rightbiceps,setRightBiceps] = useState(0)
    const [leftforearm,setLeftForearm] = useState(0)
    const [rightforearm,setRightForearm] = useState(0)
    const [leftleg,setLeftLeg] = useState(0)
    const [rightleg,setRightLeg] = useState(0)
    const [bodyfat,setBodyFat] = useState(0)
    const [summary,setSummary] = useState(false)
    const [data,setData] = useState()
    const [olddata,setOldData] = useState("brak")
    const [startDate, setStartDate] = useState("");
    const [actualDate, setActualDate] = useState("")
    const handleDate = (date) =>{
        let day = date.getDay()
        let month = date.getMonth()
        let year = date.getFullYear()
        let fulldate = year + "-" + month + "-" + day
        setActualDate(fulldate)
        setStartDate(date)
        
    }
    const handlePostMeasurement = () => {
        let data = 
        {
            "date":actualDate,
            "weight":weight,
            "growth":growth,
            "left_biceps":leftbiceps,
            "right_biceps":rightbiceps,
            "right_forearm":rightforearm,
            "left_forearm":leftforearm,
            "left_leg":leftleg,
            "right_leg":rightleg,
            "bodyfat":bodyfat,

        }
        setOldData(props.measurements[props.measurements.length-1])
        props.postMeasurement(data)
        props.getMeasurements()
        setData(data)
        setSummary(true)
        
    }
    registerLocale('pl',pl)
    
    return (
        
        <div className="addmeasurements">
            {summary ? <AddMeasurementsSummary newdata={data} olddata={olddata}/> :
            <>
            <div className="addmeasurements-title">Dodaj pomiary</div>
            <div className="addmeasurements__container">
            <div className="addmeasurements__container__oldmeasurementscontainer">
                <div className="addmeasurements__container__oldmeasurementscontainer-title">Ostatni pomiar</div>

                <div className="addmeasurements__container__oldmeasurementscontainer__data">
                    <div className="addmeasurements__container__oldmeasurementscontainer__data-input">
                        24.10.2020
                    </div>
                    </div>
        
                <div className="addmeasurements__container__oldmeasurementscontainer__elements">
                <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Waga</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">82 kg</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Wzrost</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">180 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Prawy biceps</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">30 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Lewy biceps</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">30 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Prawe przedramię</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">20 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Lewe przedramię</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">20 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Prawe udo</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">40 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Lewe udo</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">40 cm</div>
                    </div>
                </div>
            </div>
            <div className="addmeasurements__container__newmeasurementscontainer">
            <div className="addmeasurements__container__newmeasurementscontainer-title">Aktualny pomiar</div>
                <div className="addmeasurements__container__newmeasurementscontainer__data">
                    <div className="addmeasurements__container__newmeasurementscontainer__data-input">
                    <DatePicker locale='pl' dateFormat='dd/MM/yyyy' selected={startDate} onChange={date => handleDate(date)} /></div>
                    </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements">
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Waga</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input onChange={(e)=>{setWeight(parseInt(e.target.value))}} type="number" min="0" max="100" placeholder="Dodaj wagę"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Wzrost</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input onChange={(e)=>{setGrowth(parseInt(e.target.value))}} type="number" min="0" max="300" placeholder="Dodaj wzrost"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Prawy biceps</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input onChange={(e)=>{setRightBiceps(parseInt(e.target.value))}} type="number" min="0" max="100"placeholder="Prawy biceps"/></div>
                    </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Lewy biceps</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input onChange={(e)=>{setLeftBiceps(parseInt(e.target.value))}} type="number" min="0" max="100"placeholder="Lewy biceps"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Prawe przedramię</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input onChange={(e)=>{setRightForearm(parseInt(e.target.value))}} type="number" min="0" max="100"placeholder="Prawe przedramię"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Lewe przedramię</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input onChange={(e)=>{setLeftForearm(parseInt(e.target.value))}} type="number" min="0" max="100" placeholder="Lewe przedramię"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Prawe udo</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input onChange={(e)=>{setRightLeg(parseInt(e.target.value))}} type="number" min="0" max="100"placeholder="Prawe udo"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Lewe udo</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input onChange={(e)=>{setLeftLeg(parseInt(e.target.value))}} type="number" min="0" max="100" placeholder="Lewe udo"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-button"><button onClick={handlePostMeasurement}>Zaakceptuj zmiany</button></div>
                    
                </div>
                
                </div>
                </div>
            </div></>}
</div>
    );
};
const mapStateToProps = (state) => {
    return{
        measurements: state.training.measurements.data
    }
}
export default connect(mapStateToProps,{postMeasurement,getMeasurements})(AddMeasurements);  
