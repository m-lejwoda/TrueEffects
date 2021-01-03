import React from 'react';
import Scheduler from 'react-scheduler-calendar';
import {Calendar , momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pl';
import {connect} from 'react-redux';
import {getMeasurements,postTraining,getTrainings,getGoals} from '../redux/actions/trainingActions';
import ModalDisplayTraining from './ModalDisplayTraining';


export class Schedule extends React.Component {
    state = {
      modalopen:false,
      training:null,
      test:false,
      date: null,
      time: null,
      description: '',
      title: ''
    }
    handleSelectEvent = (e) =>{
      console.log("cały e")
      console.log(e)
      console.log("kliknąłeś na event")
      console.log(e.data)
      this.setState({
        modalopen:true,
        training:e.data,
        test: !this.state.test,
        date : e.date,
        time: e.time,
        description: e.description,
        title: e.title,
        alldata: e.all
      })
    }
    handleBacktoSchedule = () => {
      console.log("powrót")
      this.setState({
        modalopen:false
      })
    }
    
    render() {
      console.log(this.props.trainings)
      const {modalopen,training} = this.state
      let events = []
      this.props.trainings.map((e)=>{
        console.log(e.training)
        events.push({
          'title': e.name,
          'start': Date.parse(e.date),
          'end': Date.parse(e.date),
          'data': e.training,
          'date': e.date,
          'time': e.time,
          'description': e.description,
          'all': e
        })
        })
        const localizer = momentLocalizer(moment)
      return(
        <>
      <div className="schedule">
        <Calendar events={events} onSelectEvent={this.handleSelectEvent} localizer={localizer} style={{ height: 500,width: '95%' }}/>
        {modalopen && <ModalDisplayTraining back ={this.handleBacktoSchedule} allprops={this.props} open={this.state.modalopen} training={this.state.training} date={this.state.date} time={this.state.time} description={this.state.description} title={this.state.title} alldata={this.state.alldata}/>}

      </div>
      
      </>
      )
    }
  }
const mapStateToProps = (state) => {
    return{

        trainings: state.training.trainings.data,
        loadedtrainings: state.training.loadedtrainings,
    }
}
export default connect(mapStateToProps,{getMeasurements,getTrainings,getGoals})(Schedule);     
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
let event = [{
  id: 0,
  title: 'All Day Event very long title',
  allDay: true,
  start: new Date(2015, 3, 0),
  end: new Date(2015, 3, 1),
},
{
  id: 1,
  title: 'Long Event',
  start: new Date(2015, 3, 7),
  end: new Date(2015, 3, 10),
},

{
  id: 2,
  title: 'DTS STARTS',
  start: new Date(2016, 2, 13, 0, 0, 0),
  end: new Date(2016, 2, 20, 0, 0, 0),
},

{
  id: 3,
  title: 'DTS ENDS',
  start: new Date(2016, 10, 6, 0, 0, 0),
  end: new Date(2016, 10, 13, 0, 0, 0),
},

{
  id: 4,
  title: 'Some Event',
  start: new Date(2015, 3, 9, 0, 0, 0),
  end: new Date(2015, 3, 10, 0, 0, 0),
},
{
  id: 5,
  title: 'Conference',
  start: new Date(2015, 3, 11),
  end: new Date(2015, 3, 13),
  desc: 'Big conference for important people',
},
{
  id: 6,
  title: 'Meeting',
  start: new Date(2015, 3, 12, 10, 30, 0, 0),
  end: new Date(2015, 3, 12, 12, 30, 0, 0),
  desc: 'Pre-meeting meeting, to prepare for the meeting',
},
{
  id: 7,
  title: 'Lunch',
  start: new Date(2015, 3, 12, 12, 0, 0, 0),
  end: new Date(2015, 3, 12, 13, 0, 0, 0),
  desc: 'Power lunch',
},
{
  id: 8,
  title: 'Meeting',
  start: new Date(2015, 3, 12, 14, 0, 0, 0),
  end: new Date(2015, 3, 12, 15, 0, 0, 0),
},
{
  id: 9,
  title: 'Happy Hour',
  start: new Date(2015, 3, 12, 17, 0, 0, 0),
  end: new Date(2015, 3, 12, 17, 30, 0, 0),
  desc: 'Most important meal of the day',
},
{
  id: 10,
  title: 'Dinner',
  start: new Date(2015, 3, 12, 20, 0, 0, 0),
  end: new Date(2015, 3, 12, 21, 0, 0, 0),
},
{
  id: 11,
  title: 'Birthday Party',
  start: new Date(2015, 3, 13, 7, 0, 0),
  end: new Date(2015, 3, 13, 10, 30, 0),
},
{
  id: 12,
  title: 'Late Night Event',
  start: new Date(2015, 3, 17, 19, 30, 0),
  end: new Date(2015, 3, 18, 2, 0, 0),
},
{
  id: 12.5,
  title: 'Late Same Night Event',
  start: new Date(2015, 3, 17, 19, 30, 0),
  end: new Date(2015, 3, 17, 23, 30, 0),
},
{
  id: 13,
  title: 'Multi-day Event',
  start: new Date(2015, 3, 20, 19, 30, 0),
  end: new Date(2015, 3, 22, 2, 0, 0),
},
{
  id: 14,
  title: 'Today',
  start: new Date(new Date().setHours(new Date().getHours())),
  end: new Date(new Date().setHours(new Date().getHours())),
},
{
  id: 16,
  title: 'Video Record',
  start: new Date(2015, 3, 14, 15, 30, 0),
  end: new Date(2015, 3, 14, 19, 0, 0),
},
{
  id: 17,
  title: 'Dutch Song Producing',
  start: new Date(2015, 3, 14, 16, 30, 0),
  end: new Date(2015, 3, 14, 20, 0, 0),
},
{
  id: 18,
  title: 'Itaewon Halloween Meeting',
  start: new Date(2015, 3, 14, 16, 30, 0),
  end: new Date(2015, 3, 14, 17, 30, 0),
},
{
  id: 19,
  title: 'Online Coding Test',
  start: new Date(2015, 3, 14, 17, 30, 0),
  end: new Date(2015, 3, 14, 20, 30, 0),
},
{
  id: 20,
  title: 'An overlapped Event',
  start: new Date(2015, 3, 14, 17, 0, 0),
  end: new Date(2015, 3, 14, 18, 30, 0),
},
{
  id: 21,
  title: 'Phone Interview',
  start: new Date(2015, 3, 14, 17, 0, 0),
  end: new Date(2015, 3, 14, 18, 30, 0),
},
{
  id: 22,
  title: 'Cooking Class',
  start: new Date(2015, 3, 14, 17, 30, 0),
  end: new Date(2015, 3, 14, 19, 0, 0),
},
{
  id: 23,
  title: 'Go to the gym',
  start: new Date(2015, 3, 14, 18, 30, 0),
  end: new Date(2015, 3, 14, 20, 0, 0),
},]