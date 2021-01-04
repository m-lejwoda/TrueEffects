import React from 'react';
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
  } = useStopwatch({ autoStart: true });
  
  const handleStart = () =>{
      console.log("handle start")
      props.setStopStoper(false)
      start()
  }
if (props.stopstoper === true){
    pause()
}
console.log(props.endbuttonRef)
  return (
    <div style={{textAlign: 'center'}}>
      {/* <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p> */}
      <div style={{fontSize: '100px'}}>
        <span>{hours<10 && 0}{hours}</span>:<span>{minutes<10 && 0}{minutes}</span>:<span>{seconds<10 && 0}{seconds}</span>
      </div>
      <button id="start" onClick={handleStart}>Start</button>
      <button id="pause" onClick={pause}>Pause</button>
      <button id="reset"onClick={reset}>Reset</button>
    </div>
  );
}
export default MyStopwatch;