import React from 'react';
import '../sass/navbar.scss';
//import App from '../App';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/fontawesome-free-solid';
import {connect} from 'react-redux';
import {postLogout} from '../redux/actions/trainingActions';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    bar: {
      paddingLeft: 64,
      paddingRight: 100,
      background: '#db3d44',
    },
  }));
const Navbar = (props) => {
  const history = useHistory()
    const handleLogout = () =>{
      props.postLogout()
      // window.localStorage.removeItem('token')
      // window.localStorage.removeItem('username')
      console.log("po usunięciu tokenów")
      // await history.push('/login')
      
    }
      const classes = useStyles();
      return (
      <div className={classes.root}>
            <AppBar className={classes.bar}position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  <FontAwesomeIcon icon={faDumbbell} />TrueEffects
                </Typography>
              
                {window.localStorage.getItem('username') !== undefined ?<> <p>Witaj {window.localStorage.getItem('username')}<Button onClick={handleLogout} color="inherit">Wyloguj się</Button></p></>:<><Button color="inherit">Login</Button></>}
                
              </Toolbar>
            </AppBar>
          </div>
    );
};
const mapStateToProps = (state) => {
  return{
      trainings: state.training.trainings.data,
      loadedtrainings: state.training.loadedtrainings,
      measurements: state.training.measurements.data,
      goals: state.training.goals.data
  }
}
export default connect(mapStateToProps,{postLogout})(Navbar); 
