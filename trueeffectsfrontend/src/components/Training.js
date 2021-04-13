import React,{useState,useRef,useEffect} from 'react';
import MyStopwatch from './MyStopwatch';
import '../sass/training.scss';
import logo from '../images/logo.png';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/fontawesome-free-solid';
import { endTraining,getTrainings } from '../redux/actions/trainingActions';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});
function StyledCheckbox(props) {
  const classes = useStyles();
  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
}
const Training = (props) => {
    console.log("uruchomienie treningu")
    console.log(props.location.training)
    const history = useHistory()
    const {training} = props.location
    const [series, setSeries] = useState(0);
    const [singleSeries,setSingleSeries] = useState(0)
    const [endtraining,setEndTraining] = useState(false)
    const [input,setInput] = useState('')
    const [startStoper,setStartStoper] = useState(false)
    const [stopStoper,setStopStoper] = useState(false)
    const [seconds,setSeconds] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [hours,setHours] = useState(0)
    const [actualseconds,setActualSeconds] = useState(0)
    const [actualminutes,setActualMinutes] = useState(0)
    const [actualhours,setActualHours] = useState(0)
    const [endtrainin,setEndTrainin] = useState(false)
    const inputRef = useRef()
    const buttonRef = useRef()
    const endbuttonRef = useRef()
    const secondsRef = useRef()
    const minutesRef = useRef()
    const hoursRef = useRef()
    const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);
    const goNext = () =>{
      if (inputRef.current.value !== ""){
        training.training[`${series}`].reps[`${singleSeries}`]= parseInt(inputRef.current.value)
      }
      let value = parseInt(inputRef.current.value)
      let placeholder = parseInt(inputRef.current.placeholder)
      if(Number.isInteger(value)){
        inputRef.current.value = ''
      if(singleSeries+1 < training.training[series].reps.length){
      setSingleSeries(singleSeries+1)
      }else{
      if(series+1>=training.training.length){
        setEndTraining(true)
      }
      else{
      setSeries(series+1)
      setSingleSeries(0)
      }
    }}
    else if(Number.isInteger(placeholder)){
      inputRef.current.value = ''
      if(singleSeries+1 < training.training[series].reps.length){
      setSingleSeries(singleSeries+1)
    }else{
      if(series+1>=training.training.length){
        setEndTraining(true)
      }else{
      setSeries(series+1)
      setSingleSeries(0)
      }
    }}
    else{
      alert("Niepoprawne dane");
    }
  }
  const handlemovetoschedulepage = () =>{
    history.push('/schedule/')
}
  const handleStoper = () => {
    setStartStoper(!startStoper)
  }
  const handleInput = () => {
    setInput(inputRef.current.value)
  }
  const handleTime = (x,y,z) => {
    console.log("time")
    setActualSeconds(x)
    setActualMinutes(y)
    setActualHours(z)
  }
  const handlePause = (pause) =>{
    pause()
}
  const displayAlert = () => {
    let sec 
    let min
    let hour
    if (seconds<10){
      sec = "0"+ seconds 
    }else{
      sec = seconds
    }
    if (minutes<10){
      min = "0"+ minutes 
    }else{
      min = minutes
    }
    if (hours<10){
      hour = "0"+ hours 
    }else{
      hour = hours
    }
    return alert("Trening zakończony"+ hour +":" + min + ":" + sec)
    
  }
  const takeStopwatchData = (h,m,s,) =>{
    
    setHours(h)
    setMinutes(m)
    setSeconds(s)
  }
  const handleEndTraining = async()=>{
    await setStopStoper(true)
    console.log(secondsRef)
    console.log(minutesRef)
    console.log(hoursRef)
    // console.log(props.location.training.id)
    await props.endTraining(props.location.training.id,props.location.training)
    await props.getTrainings()
    await displayAlert()
    await handlemovetoschedulepage()
  }
  if (seconds !== 0 || minutes !== 0 ||  hours !== 0){
    displayAlert()
 }
    return (
        <div className="training">
            <div className="training__top">
                <div className="training__top__previousexercise">
                    <div style={{visibility: typeof training.training[series-1] !== "undefined" ? 'visible' : 'hidden' }} className="training__top__previousexercise-title"><FontAwesomeIcon icon={faArrowLeft} /> Poprzednie ćwiczenie</div>
                    <div style={{visibility: typeof training.training[series-1] !== "undefined" ? 'visible' : 'hidden' }} className="training__top__previousexercise-name">{typeof training.training[series-1] !== "undefined" && training.training[series-1].exercise.name}</div>
                </div>
                {typeof training.training[series+1] !== "undefined" && <div className="training__top__nextexercise">
                    <div style={{visibility: typeof training.training[series+1] !== "undefined" ? 'visible' : 'hidden' }} className="training__top__nextexercise-title">Następne ćwiczenie <FontAwesomeIcon icon={faArrowRight} /></div>
                    <div style={{visibility: typeof training.training[series+1] !== "undefined" ? 'visible' : 'hidden' }} className="training__top__nextexercise-name">{typeof training.training[series+1] !== "undefined" &&  training.training[series+1].exercise !== null ? training.training[series+1].exercise.name !== null: training.training[series+1].ownexercise.name}</div>
                </div>}
            </div>
            <div className="training__middle">
                <div className="training__middle-title">Aktualne Ćwiczenie</div>
                <div className="training__middle-exercise">{training.training[series].exercise !== null ? training.training[series].exercise.name : training.training[series].ownexercise.name}</div>
                <div className="training__middle__logotime">
                    <div className="training__middle__logotime-logo">
                      <img src={logo} alt="logo"  />
                    </div>
                    <div className="training__middle__logotime-time">
                    <MyStopwatch setseconds={setSeconds} setminutes={setMinutes} sethours={setHours} handleTime={handleTime} refsec={secondsRef} refmin={minutesRef} refhour={hoursRef} endtraining={endtrainin} endbuttonref={endbuttonRef} stopstoper={stopStoper} setStopStoper={setStopStoper}/>
                  </div>
                </div>
                <div className="training__middle__series">
                    <div className="training__middle__series__checkboxes" style={{visibility: endtraining ? 'hidden' : 'visible' }}>
                    {training.training[`${series}`].reps.map(function (item,index) {
                      if(index < singleSeries+1){
                        return (
                          <Checkbox checked={true} />
                        )
                        }else{
                        return(
                          <Checkbox disabled checked={false}/>
                        )}}
                )}
                      </div>
                    <div className="training__middle__series-title" style={{visibility: endtraining ? 'hidden' : 'visible' }}>Seria {singleSeries+1}/{training.training[`${series}`].reps.length}</div>
                </div>
            </div>
            <div className="training__bottom">
                <div className="training__bottom__leftbutton">
                    <button id="endtraining" ref={endbuttonRef} onClick={handleEndTraining}>Zakończ trening X</button>
                </div>
                <div className="training__bottom__phase" style={{visibility: endtraining ? 'hidden' : 'visible' }}>
                    <div className="training__bottom__phase-title">Fazy(w sekundach)</div>
                    <div className="training__bottom__phase__allphases">
                        <div className="training__bottom__phase__allphases-phase">{training.training[`${series}`].concentric_phase}</div>
                        <div className="training__bottom__phase__allphases-/">/</div>
                        <div className="training__bottom__phase__allphases-phase">{training.training[`${series}`].pause_after_concentric_phase}</div>
                        <div className="training__bottom__phase__allphases-/">/</div>
                        <div className="training__bottom__phase__allphases-phase">{training.training[`${series}`].eccentric_phase}</div>
                        <div className="training__bottom__phase__allphases-/">/</div>
                        <div className="training__bottom__phase__allphases-phase">{training.training[`${series}`].pause_after_eccentric_phase}</div>
                    </div>
                    <div className="training__bottom__weight-title">Ciężar dodatkowy</div>
                    <div className="training__bottom__weight-title2">
                        {training.training[`${series}`].weight}kg
                    </div>
                    <div className="training__bottom__phase-title2">Ile powtórzeń wykonałeś w serii</div>
                    <div className="training__bottom__phase__reps">
                        <div className="training__bottom__phase__reps-actualreps"><input ref={inputRef} placeholder={training.training[`${series}`].reps[`${singleSeries}`]} onChange={handleInput} id="actualreps" min="0" max="10000" /></div>
                        <div className="training__bottom__phase__reps-/">/</div>
                        <div className="training__bottom__phase__reps-assumedreps">{training.training[`${series}`].reps[`${singleSeries}`]}</div>
                    </div>
                </div>
                <div className="training__bottom__rightbutton">
                    <button ref={buttonRef} style={{visibility: endtraining ? 'hidden' : 'visible' }} onClick={goNext} id="nextexercise">Przejdź dalej</button>
                </div>
            </div>
            
        </div>
    );
};

export default connect(null,{getTrainings,endTraining})(Training); 
