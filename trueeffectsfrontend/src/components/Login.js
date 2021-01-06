import React,{useState} from 'react';
import '../sass/login.scss';
import {connect} from 'react-redux';
import {postLogin} from '../redux/actions/authenticationActions';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/fontawesome-free-solid';
import AuthenticateLogo from './AuthenticateLogo';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        // margin: theme.spacing(1),
        // font-weight: 700,
        width: '60ch',
        '& .MuiInputBase-input':{
            fontWeight: '700'
            
        }
        
      },
    },
  }));

const Login = (props) => {
    const handleMoveToRegister = () => {
        props.history.push('/register')
    }
    const handleMovetoBack = () => {
        props.history.goBack()
    }
    console.log(props)
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    const classes = useStyles();
    const handleLogin = (e) =>{
        e.preventDefault()
        let data= {
            "username": login,
            "password": password
        }
        props.postLogin(data)
    }
    
    if(props.token !== '' ){
        props.history.push("/");
    }
    return (
        
        <div className="login">
            <AuthenticateLogo />
            <div className="login__secondcontainer">
                
            <div className="login__secondcontainer__top">
                <div className="login__secondcontainer__top__back" onClick={handleMovetoBack}>
                    <div className="login__secondcontainer__top__back-icon"><FontAwesomeIcon icon={faArrowLeft} /></div>
                    <div className="login__secondcontainer__top__back-title">Cofnij</div>
                </div>
                <div className="login__secondcontainer__top__forward" onClick={handleMoveToRegister}>
                    <div className="login__secondcontainer__top__forward-title">Zarejestruj się</div>
                    <div className="login__secondcontainer__top__forward-icon"><FontAwesomeIcon icon={faArrowRight} /></div>
                </div>
                </div>
                <div className="login__secondcontainer__form">
                    <form className={classes.root} noValidate autoComplete="off">
                    <div className="login__secondcontainer__form__title">Zaloguj się</div>
                    <div className="login__secondcontainer__form__secondtitle">Zaloguj się aby kontynuować</div>
                    <div className="login__secondcontainer__form__username-input">
                    <TextField onChange={(e)=>setLogin(e.target.value)} id="standard-password-input" label="Nazwa użytkownika" type="text" autoComplete="current-password"/>
                    </div>
                    <div className="login__secondcontainer__form__username-password">
                    <TextField onChange={(e)=>setPassword(e.target.value)} id="standard-password-input" label="Hasło" type="password" autoComplete="current-password"/>
                    </div>
                    {props.error !== '' && <p style={{color:'red'}}>{props.error}</p>}
                    <div className="login__secondcontainer__form__button">
                        <button className="login__secondcontainer__form__button-login" onClick={handleLogin}>Zaloguj się</button>
                        <p className="login__secondcontainer__form__button-forget">Zapomniałem hasła</p>
                    </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};
const mapStateToProps = (state) => {
    return{
        // trainings: state.training.trainings.data,
        error: state.authentication.error,
        token: state.authentication.token
    }
}
export default connect(mapStateToProps,{postLogin})(Login); 
