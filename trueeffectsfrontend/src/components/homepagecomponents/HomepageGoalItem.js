import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/pl';
import moment from 'moment';
moment().locale('pl')
const HomepageGoalItem = (props) => {
    let firstdate = props.goal
    let currentTime = new Date();
    let dd = currentTime.getDate();
    let mm = currentTime.getMonth()+1;
    let yyyy = currentTime.getFullYear();
    
    if(dd<10) 
{
    dd=`0${dd}`;
} 
if(mm<10) 
{
    mm=`0${mm}`;
} 
let today = `${yyyy}-${mm}-${dd}`;
    let start = new Date(firstdate)
    return (
        <div className="homepage__goalscontainer__elements__element">
        <div className="homepage__goalscontainer__elements__element-name">{props.goal.description}<button>Usuń cel</button></div>
        <div className="homepage__goalscontainer__elements__element__time">
            <div className="homepage__goalscontainer__elements__element__time-description">Pozostały czas upłynie</div>
            <div className="homepage__goalscontainer__elements__element__time-number">
                <Moment locale='pl' fromNow>{props.goal.date}</Moment>
                </div>
            <div className="homepage__goalscontainer__elements__element__time-data">{props.goal.date}</div>
        </div>
    </div>
    );
};

export default HomepageGoalItem;