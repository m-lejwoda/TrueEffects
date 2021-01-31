import React,{useEffect} from 'react';
import '../sass/homepage.scss';
import {connect} from 'react-redux';
import {postLogin} from '../redux/actions/authenticationActions';
import {getMeasurements,postTraining,getTrainings,getGoals} from '../redux/actions/trainingActions';
import HomepageTrainingItem from './homepagecomponents/HomepageTrainingItem';
import HomepageMeasurementItem from './homepagecomponents/HomepageMeasurementItem';
import HomepageGoalItem from './homepagecomponents/HomepageGoalItem';

const Homepage = (props) => {
    console.log(props.goals)
    const click = () => {
        console.log("klik")
        console.log(props)
    }
    return (
        <div className="homepage">
            <div className="homepage__title">
                Strona Domowa
            </div>
            <div className="homepage__container">
            <div className="homepage__firstcontainer">
            <div className="homepage__goalscontainer">
                <div className="homepage__goalscontainer-title">Twoje cele do zrealizowania</div>
                <div className="homepage__goalscontainer-add"><button onClick={click}>+ Dodaj nowe cele</button></div>
                <div className="homepage__goalscontainer__elements">
                {props.goals.length>0 ? props.goals.map((goal)=><HomepageGoalItem goal={goal}/>): <p>Nie masz aktualnie żadnych celów do zrealizowania</p>}
                {/* <div className="homepage__goalscontainer__elements__element">
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
                </div> */}
                </div>
            </div>
            <div className="homepage__measurementcontainer">
            <HomepageMeasurementItem measurement={props.measurements}/>
            </div>
            {/* <div className="homepage__measurementcontainer">
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
            </div> */}
            </div>
            <div className="homepage__lasttrainingscontainer">
                <div className="homepage__lasttrainingscontainer-title">Ostatnie wykonane treningi</div>
                <div className="homepage__lasttrainingscontainer-add"><button>+ Dodaj nowy trening</button></div>
                <div className="homepage__lasttrainingscontainer__container">
                    {props.trainings.length>0 ? props.trainings.map((training)=> <HomepageTrainingItem allprops={props} training={training}/>): <p>Nie wykonałeś jeszcze żadnych treningów</p>}
                    {/* <div className="homepage__lasttrainingscontainer__container__element">
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
                    </div> */}
                    {/* <div className="homepage__lasttrainingscontainer__container__element">
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
                    </div> */}
                </div>
            </div>
            </div>
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
export default connect(mapStateToProps,{postLogin,getMeasurements,getTrainings,getGoals})(Homepage);     