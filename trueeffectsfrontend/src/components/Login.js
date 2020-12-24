import React from 'react';
import '../sass/login.scss';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/fontawesome-free-solid';
import AuthenticateLogo from './AuthenticateLogo';

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
const Login = () => {
    const classes = useStyles();
    return (
        <div className="login">
            <AuthenticateLogo />
            {/* <div className="login__firstcontainer"></div> */}
            <div className="login__secondcontainer">
                
            <div className="login__secondcontainer__top">
                <div className="login__secondcontainer__top__back">
                    <div className="login__secondcontainer__top__back-icon"><FontAwesomeIcon icon={faArrowLeft} /></div>
                    <div className="login__secondcontainer__top__back-title">Cofnij</div>
                </div>
                <div className="login__secondcontainer__top__forward">
                    <div className="login__secondcontainer__top__forward-title">Zarejestruj się</div>
                    <div className="login__secondcontainer__top__forward-icon"><FontAwesomeIcon icon={faArrowRight} /></div>
                </div>
                </div>
                <div className="login__secondcontainer__form">
                    <form className={classes.root} noValidate autoComplete="off">
                    <div className="login__secondcontainer__form__title">Zaloguj się</div>
                    <div className="login__secondcontainer__form__secondtitle">Zaloguj się aby kontynuować</div>
                    <div className="login__secondcontainer__form__username-input">
                    <TextField id="standard-password-input" label="Nazwa użytkownika" type="text" autoComplete="current-password"/>
                    </div>
                    <div className="login__secondcontainer__form__username-password">
                    <TextField id="standard-password-input" label="Hasło" type="password" autoComplete="current-password"/>
                    </div>
                    <div className="login__secondcontainer__form__button">
                        <button className="login__secondcontainer__form__button-login">Zaloguj się</button>
                        <p className="login__secondcontainer__form__button-forget">Zapomniałem hasła</p>
                    </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Login;