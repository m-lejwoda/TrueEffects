import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Training from './Training';
import Schedule from './Schedule';
import Homepage from './Homepage';
import {connect} from 'react-redux';
import {getMeasurements,postTraining,getTrainings} from '../redux/actions/trainingActions';
//import MeasurementsNotification from './MeasurementsNotification';
import DisplayMeasurements from './DisplayMeasurements'
import AddMeasurements from './AddMeasurements';
import '../sass/defaultcontainer.scss';
import { BoxLoading } from 'react-loadingg';
const DefaultContainer = (props) => {
  useEffect(()=>{
    console.log("Homepage")
    props.getMeasurements();
    props.getTrainings();
  },[])
  console.log(props.trainings)
  console.log(props.loadedtrainings)
return(
    <div className="containerdefault">
      {props.loadedtrainings ?  <>
      <Navbar />
      <Navbar2 />
      <Route exact path="/" component={ Homepage }/>
      <Route path="/training" component={Training}/>
      <Route path="/schedule" component={Schedule}/>
      <Route path="/addmeasurements" component={AddMeasurements}/>
      <Route path="/displaymeasurements" component={DisplayMeasurements}/>
      </>
      : <BoxLoading />}
    </div>  
 )}
 const mapStateToProps = (state) => {
  return{
      trainings: state.training,
      loadedtrainings: state.training.loadedtrainings,
  }
}
export default connect(mapStateToProps,{getMeasurements,getTrainings})(DefaultContainer);   