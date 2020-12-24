import React from 'react';
import '../sass/register.scss';
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
const Register = () => {
    const classes = useStyles();
    return (
        <div className="register">
            <AuthenticateLogo />
            {/* <div className="register__firstcontainer"></div> */}
            <div className="register__secondcontainer">
                <div className="register__secondcontainer__top">
                <div className="register__secondcontainer__top__back">
                    <div className="register__secondcontainer__top__back-icon"><FontAwesomeIcon icon={faArrowLeft} /></div>
                    <div className="register__secondcontainer__top__back-title">Cofnij</div>
                </div>
                <div className="register__secondcontainer__top__forward">
                    <div className="register__secondcontainer__top__forward-title">Zaloguj się</div>
                    <div className="register__secondcontainer__top__forward-icon"><FontAwesomeIcon icon={faArrowRight} /></div>
                </div>
                </div>
                <div className="register__secondcontainer__form">
                    <form className={classes.root} noValidate autoComplete="off">
                    <div className="register__secondcontainer__form__title">Zarejestruj się</div>
                    <div className="register__secondcontainer__form__secondtitle">Zarejestruj się aby kontynuować</div>
                    <div className="register__secondcontainer__form__allinputs">
                    <div className="register__secondcontainer__form__username-input">
                    <TextField id="standard-password-input" label="Nazwa użytkownika" type="text" autoComplete="current-password"/>
                    </div>
                    <div className="register__secondcontainer__form__username-email">
                    <TextField id="standard-password-input" label="Email" type="email" autoComplete="current-password"/>
                    </div>
                    <div className="register__secondcontainer__form__username-password">
                    <TextField id="standard-password-input" label="Hasło" type="password" autoComplete="current-password"/>
                    </div>
                    <div className="register__secondcontainer__form__username-password">
                    <TextField id="standard-password-input" label="Powtórz hasło" type="password" autoComplete="current-password"/>
                    </div>
                    </div>
                    <div className="register__secondcontainer__form__button">
                        <button className="register__secondcontainer__form__button-register">Zarejestruj się</button>
                        {/* <p className="register__secondcontainer__form__button-forget">Zapomniałem hasła</p> */}
                    </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Register;