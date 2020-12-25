import React from 'react';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__title">
                Strona Domowa
            </div>
            <div className="homepage__goalscontainer">
                <div className="homepage__goalscontainer-title"></div>
                <div className="homepage__goalscontainer-add"></div>
                <div className="homepage__goalscontainer__element">
                    <div className="homepage__goalscontainer__element-name"></div>
                    <div className="homepage__goalscontainer__element__time">
                        <div className="homepage__goalscontainer__element__time-description"></div>
                        <div className="homepage__goalscontainer__element__time-number"></div>
                        <div className="homepage__goalscontainer__element__time-data"></div>
                    </div>
                </div>
            </div>
            <div className="homepage__measurementcontainer">
                <div className="homepage__measurementcontainer-title"></div>
                <div className="homepage__measurementcontainer-data"></div>
                <div className="homepage__measurementcontainer-add"></div>
                <div className="homepage__measurementcontainer__container">
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Prawy biceps</div>
                        <div className="homepage__measurementcontainer__container__element-result">10</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Lewy biceps</div>
                        <div className="homepage__measurementcontainer__container__element-result">10</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Udo lewej nogi</div>
                        <div className="homepage__measurementcontainer__container__element-result">Udo prawej nogi</div>
                    </div>
                    <div className="homepage__measurementcontainer__container__element">
                        <div className="homepage__measurementcontainer__container__element-name">Lewe przedramię</div>
                        <div className="homepage__measurementcontainer__container__element-result">Prawe przedramię</div>
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
            <div className="homepage__lasttrainingscontainer">
                <div className="homepage__lasttrainingscontainer-title"></div>
                <div className="homepage__lasttrainingscontainer-add"></div>
                <div className="homepage__lasttrainingscontainer__container">
                    <div className="homepage__lasttrainingscontainer__container__element">
                    <div className="homepage__lasttrainingscontainer__container__element__top">
                        <div className="homepage__lasttrainingscontainer__container__element__top-data"></div>
                        <div className="homepage__lasttrainingscontainer__container__element__top-title"></div>
                        <div className="homepage__lasttrainingscontainer__container__element__top-button"></div>
                    </div>
                    </div>

                </div>
            </div>

            
        </div>
    );
};

export default HomePage;     