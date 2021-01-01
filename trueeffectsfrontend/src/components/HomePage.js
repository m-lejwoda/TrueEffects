import React,{useEffect} from 'react';
import '../sass/homepage.scss';
import {connect} from 'react-redux';
import {postLogin} from '../redux/actions/authenticationActions';
import {getMeasurements,postTraining,getTrainings} from '../redux/actions/trainingActions';

const Homepage = (props) => {
    // useEffect(()=>{
    //     console.log("Homepage")
    //     props.postLogin();
    //     props.getMeasurements();
    //     props.getTrainings();
    // },[])
    return (
        <div className="homepage">
            <div className="homepage__title">
                Strona Domowa
            </div>
            <div className="homepage__container">
            <div className="homepage__firstcontainer">
            <div className="homepage__goalscontainer">
                <div className="homepage__goalscontainer-title">Twoje cele do zrealizowania</div>
                <div className="homepage__goalscontainer-add"><button>+ Dodaj nowe cele</button></div>
                <div className="homepage__goalscontainer__elements">
                <div className="homepage__goalscontainer__elements__element">
                    <div className="homepage__goalscontainer__elements__element-name">Podciąganie +20 kg * 5</div>
                    <div className="homepage__goalscontainer__elements__element__time">
                        <div className="homepage__goalscontainer__elements__element__time-description">Pozostały czas: </div>
                        <div className="homepage__goalscontainer__elements__element__time-number">30 dni </div>
                        <div className="homepage__goalscontainer__elements__element__time-data">24.12.2020</div>
                    </div>
                </div>
                <div className="homepage__goalscontainer__elements__element">
                    <div className="homepage__goalscontainer__elements__element-name">Podciąganie +20 kg * 5</div>
                    <div className="homepage__goalscontainer__elements__element__time">
                        <div className="homepage__goalscontainer__elements__element__time-description">Pozostały czas: </div>
                        <div className="homepage__goalscontainer__elements__element__time-number">30 dni </div>
                        <div className="homepage__goalscontainer__elements__element__time-data">24.12.2020</div>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="homepage__measurementcontainer">
                <div className="homepage__measurementcontainer-title">Twoje ostatnie pomiary</div>
                <div className="homepage__measurementcontainer-data">Pomiary na dzień 24.12.2020</div>
                <div className="homepage__measurementcontainer-add"><button>+ Dodaj nowe pomiary</button></div>
                <div className="homepage__measurementcontainer__container">
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Prawy biceps</div>
                        <div className="homepage__measurementcontainer__container__element-result">10 cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Lewy biceps</div>
                        <div className="homepage__measurementcontainer__container__element-result">10 cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Prawe przedramię</div>
                        <div className="homepage__measurementcontainer__container__element-result">10 cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Lewe przedramię</div>
                        <div className="homepage__measurementcontainer__container__element-result">10 cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Udo prawej nogi</div>
                        <div className="homepage__measurementcontainer__container__element-result">50 cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Udo lewej nogi</div>
                        <div className="homepage__measurementcontainer__container__element-result">50 cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Waga</div>
                        <div className="homepage__measurementcontainer__container__element-result">75kg</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Wzrost</div>
                        <div className="homepage__measurementcontainer__container__element-result">180 cm</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Talia</div>
                        <div className="homepage__measurementcontainer__container__element-result">85 cm</div>
                    </div>
                </div> 
            </div>
            </div>
            <div className="homepage__lasttrainingscontainer">
                <div className="homepage__lasttrainingscontainer-title">Ostatnie wykonane treningi</div>
                <div className="homepage__lasttrainingscontainer-add"><button>+ Dodaj nowy trening</button></div>
                <div className="homepage__lasttrainingscontainer__container">
                    <div className="homepage__lasttrainingscontainer__container__element">
                    <div className="homepage__lasttrainingscontainer__container__element__top">
                        <div className="homepage__lasttrainingscontainer__container__element__top-title">Wytrzymałość</div>
                        <div className="homepage__lasttrainingscontainer__container__element__top-databutton">
                        <div className="homepage__lasttrainingscontainer__container__element__top-data">24.12.2020</div>
                        <div className="homepage__lasttrainingscontainer__container__element__top-button"><button>Powtórz trening</button></div>
                        </div>
                    </div>
                    <div className="homepage__lasttrainingscontainer__container__element__bottom">
                        Trening nastawiony na siłe +20 kg z elementami wytrzymałości
                    </div>
                    </div>
                    <div className="homepage__lasttrainingscontainer__container__element">
                    <div className="homepage__lasttrainingscontainer__container__element__top">
                        <div className="homepage__lasttrainingscontainer__container__element__top-title">Wytrzymałość</div>
                        <div className="homepage__lasttrainingscontainer__container__element__top-databutton">
                        <div className="homepage__lasttrainingscontainer__container__element__top-data">24.12.2020</div>
                        <div className="homepage__lasttrainingscontainer__container__element__top-button"><button>Powtórz trening</button></div>
                        </div>
                    </div>
                    <div className="homepage__lasttrainingscontainer__container__element__bottom">
                        Trening nastawiony na siłe +20 kg z elementami wytrzymałości
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
};

const mapStateToProps = (state) => {
    return{
        trainings: state.training,
        loadedtrainings: state.training.loadedtrainings
    }
}
export default connect(mapStateToProps,{postLogin,getMeasurements,getTrainings})(Homepage);     