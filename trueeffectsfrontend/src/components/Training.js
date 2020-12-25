import React from 'react';
import ReactStopwatch from 'react-stopwatch';
const Training = () => {
    return (
        <div className="training">
            <div className="training__top">
                <div className="training__top__previousexercise">
                    <div className="training__top__previousexercise-title"></div>
                    <div className="training__top__previousexercise-name"></div>
                </div>
                <div className="training__top__nextexercise">
                    <div className="training__top__nextexercise-title"></div>
                    <div className="training__top__nextexercise-name"></div>
                </div>
            </div>
            <div className="training__middle">
                <div className="training__middle-title"></div>
                <div className="training__middle-exercise"></div>
                <div className="training__middle__logotime">
                    <div className="training__middle__logotime-logo"></div>
                    <div className="training__middle__logotime-time">
                    <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit="24:00:00"
    onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div>
          <p>
            Formatted: { formatted }
          </p>
          <p>
            Hours: { hours }
          </p>
          <p>
            Minutes: { minutes }
          </p>
          <p>
            Seconds: { seconds }
          </p>
        </div>
      );
    }}
   />
                    </div>
                </div>
                <div className="training__middle__series">
                    <div className="training__middle__series__checkboxes"></div>
                    <div className="training__middle__series__title"></div>
                </div>
            </div>
            <div classname="training__bottom">
                <div className="training__bottom__leftbutton">
                    <button className="endtraining"></button>
                </div>
                <div className="training__bottom__phase">
                    <div className="training__bottom__phase-title"></div>
                    <div className="training__bottom__phase__allphases">
                        <div className="training__bottom__phase__allphases-phase"></div>
                        <div className="training__bottom__phase__allphases-/"></div>
                        <div className="training__bottom__phase__allphases-phase"></div>
                        <div className="training__bottom__phase__allphases-/"></div>
                        <div className="training__bottom__phase__allphases-phase"></div>
                        <div className="training__bottom__phase__allphases-/"></div>
                        <div className="training__bottom__phase__allphases-phase"></div>
                    </div>
                    <div className="training__bottom__phase__title2"></div>
                    <div className="training__bottom__phase__reps">
                        <div className="training__bottom__phase__reps-actualreps"></div>
                        <div className="training__bottom__phase__reps-/"></div>
                        <div className="training__bottom__phase__reps-assumedreps"></div>
                    </div>
                </div>
                <div className="training__bottom__rightbutton">
                    <button className="nexttraining"></button>
                </div>
            </div>
            
        </div>
    );
};

export default Training;