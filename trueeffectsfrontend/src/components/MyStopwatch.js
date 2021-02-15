import React,{useState,useRef,useEffect} from 'react';
import { useStopwatch } from 'react-timer-hook';

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
      console.log("handle start")
      props.setStopStoper(false)
      start()
  }
if (props.stopstoper === true){
    pause()
}
if(props.endtraining === true){
  console.log("koniec")
  props.setseconds(seconds)
  props.setminutes(minutes)
  props.sethours(hours)
}
// console.log(props.endbuttonRef)
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{hours<10 && 0}{hours}</span>:<span>{minutes<10 && 0}{minutes}</span>:<span>{seconds<10 && 0}{seconds}</span>
      </div>
      <div className="stopwatchbuttons">
        <button id="start" onClick={handleStart}>Start</button>
        <button id="pause" onClick={pause}>Pause</button>
        <button id="reset"onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default MyStopwatch;