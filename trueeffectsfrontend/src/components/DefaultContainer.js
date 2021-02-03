import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Training from './Training';
import Schedule from './Schedule';
import Homepage from './Homepage';
import AddGoals from './AddGoals';
import {connect} from 'react-redux';
import {getMeasurements,postTraining,getTrainings,getGoals,getExercises} from '../redux/actions/trainingActions';
//import MeasurementsNotification from './MeasurementsNotification';
import DisplayMeasurements from './DisplayMeasurements'
import AddMeasurements from './AddMeasurements';
import CreateTraining from './CreateTraining';
import '../sass/defaultcontainer.scss';
import { BoxLoading } from 'react-loadingg';
import AddMeasurementsSummary from './AddMeasurementsSummary';
import { useHistory } from "react-router-dom";
const DefaultContainer = (props) => {
  useEffect(()=>{
    console.log(window.localStorage.getItem('token'))
    // if(window.localStorage.getItem('token') === null){
    //   props.history.push('/login')
    // }
    console.log("Default Container")
    props.getMeasurements();
    props.getTrainings();
    props.getGoals();
    props.getExercises();
  },[])
  
return(
    <div className="containerdefault">
      {props.loadedtrainings && props.loadedgoals && props.loadedmeasurements && props.loadedexercises ?  <>
      <Navbar />
      <Navbar2 />
      <Route exact path="/" component={Homepage}/>
      <Route path="/training" component={Training}/>
      <Route path="/schedule" component={Schedule}/>
      <Route path="/addmeasurements" component={AddMeasurements}/>
      <Route path="/displaymeasurements" component={DisplayMeasurements}/>
      <Route path="/createtraining" component={CreateTraining}/>
      <Route path="/measurementsummary" component={AddMeasurementsSummary} />
      <Route path="/addgoals" component={AddGoals} />
      </>
      : <BoxLoading />}
    </div>  
 )}
 const mapStateToProps = (state) => {
  return{
      
      loadedtrainings: state.training.loadedtrainings,
      loadedmeasurements: state.training.loadedmeasurements,
      loadedgoals: state.training.loadedgoals,
      loadedexercises: state.training.loadedexercises
  }
}
export default connect(mapStateToProps,{getMeasurements,getTrainings,getGoals,getExercises})(DefaultContainer);   