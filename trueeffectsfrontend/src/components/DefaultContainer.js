import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import App from '../App';
import '../sass/defaultcontainer.scss';
const DefaultContainer = () => (
    <div>
    {/* <Header toggleAlert={this.toggleAlert} /> */}
    <div className="containerdefault">
      <Navbar />
      <Navbar2 />
      <Route exact path="/" component={ App }/>
      {/* <Route path="/main" component={Main} />
      <Route path="/user" component={User} />
      <Route path="/hw-setting" component={Setting} />
      <Route path="/hw-detail/:id" component={HwDetail} />
      <Route path="/gas-detail/:id" component={GasDetail} />
      {this.state.isAlertOpen ? <Alert /> : null} */}
    </div>
    </div>
 )
export default DefaultContainer