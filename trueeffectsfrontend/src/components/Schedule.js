import React from 'react';
import Scheduler from 'react-scheduler-calendar';
import {Calendar , momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pl';



export class Schedule extends React.Component {
    render() {
        const localizer = momentLocalizer(moment)
      return(<Calendar events={[]} localizer={localizer} style={{ height: 500,width: '95%' }}/>)
    }
  }
export default Schedule;
// const Schedule = () => {
//     const localizer = momentLocalizer(moment)
//     return (
//         <div className="schedule">
//             <div className="schedule-title"></div>
//             <div className="schedule__firstcontainer">
//                 <div className="schedule__firstcontainer-title">Kalendarz</div>
//                 <div className="schedule__firstcontainer-scheduler">
//                     <Calendar localizer={localizer}/>
//                 </div>
//             </div>
//             <div className="schedule__secondcontainer">
//                 <div className="schedule__secondcontainer__elements">
//                     <div className="schedule__secondcontainer__elements__top">
//                         <div className="schedule__secondcontainer__elements__top-realized"></div>
//                         <div className="schedule__secondcontainer__elements__top-toberealized"></div>
//                     </div>
//                     <div className="schedule__secondcontainer__elements__element">
//                         <div className="schedule__secondcontainer__elements__element-name"></div>
//                         <div className="schedule__secondcontainer__elements__element-data"></div>
//                         <div className="schedule__secondcontainer__elements__element-button"></div>
//                     </div>
                    
//                 </div>
//             </div>
            
//         </div>
//     );
// };

// export default Schedule;