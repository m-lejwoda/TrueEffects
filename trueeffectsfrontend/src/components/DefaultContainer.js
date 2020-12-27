import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Training from './Training';
import Schedule from './Schedule';
import Homepage from './Homepage';
//import MeasurementsNotification from './MeasurementsNotification';
import DisplayMeasurements from './DisplayMeasurements'
import AddMeasurements from './AddMeasurements';
import '../sass/defaultcontainer.scss';

const DefaultContainer = () => (
    
    <div className="containerdefault">
      <Navbar />
      <Navbar2 />
      <Route exact path="/" component={ Homepage }/>
      <Route path="/training" component={Training}/>
      <Route path="/schedule" component={Schedule}/>
      <Route path="/addmeasurements" component={AddMeasurements}/>
      <Route path="/displaymeasurements" component={DisplayMeasurements}/>

    </div>
    
 )
export default DefaultContainer