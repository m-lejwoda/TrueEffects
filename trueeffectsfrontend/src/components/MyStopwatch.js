import React,{useState,useRef,useEffect} from 'react';
import { useStopwatch } from 'react-timer-hook';
import {connect} from 'react-redux';
import { postTime } from '../redux/actions/trainingActions';
const MyStopwatch=(props) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
  
  const handleStart = () =>{
      props.setStopStoper(false)
      start()
  }
if (props.stopstoper === true){
    pause()
}
if(props.endtraining === true){
  props.setseconds(seconds)
  props.setminutes(minutes)
  props.sethours(hours)
}
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span ref={props.refhours}>{hours<10 && 0}{hours}</span>:<span ref={props.refminutes}>{minutes<10 && 0}{minutes}</span>:<span ref={props.refseconds}>{seconds<10 && 0}{seconds}</span>
      </div>
      <div className="stopwatchbuttons">
        <button id="start" onClick={handleStart}>Start</button>
        <button id="pause" onClick={pause}>Pause</button>
        <button id="reset"onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default connect(null,{postTime})(MyStopwatch); 
