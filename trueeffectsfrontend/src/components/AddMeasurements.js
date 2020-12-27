import React,{useState} from 'react';
import '../sass/addmeasurements.scss';
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from "date-fns/locale/pl";

const AddMeasurements = () => {
    registerLocale('pl',pl)
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="addmeasurements">
            <div className="addmeasurements-title">Dodaj pomiary</div>
            <div className="addmeasurements__container">
            <div className="addmeasurements__container__oldmeasurementscontainer">
                <div className="addmeasurements__container__oldmeasurementscontainer-title">Ostatni pomiar</div>

                <div className="addmeasurements__container__oldmeasurementscontainer__data">
                    <div className="addmeasurements__container__oldmeasurementscontainer__data-input">
                        24.10.2020
                    </div>
                    </div>
                <div className="addmeasurements__container__oldmeasurementscontainer__elements">
                <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Waga</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">82 kg</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Wzrost</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">180 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Prawy biceps</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">30 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Lewy biceps</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">30 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Prawe przedramię</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">20 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Lewe przedramię</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">20 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Prawe udo</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">40 cm</div>
                    </div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-name">Lewe udo</div>
                    <div className="addmeasurements__container__oldmeasurementscontainer__elements__element-result">40 cm</div>
                    </div>
                </div>
            </div>
            <div className="addmeasurements__container__newmeasurementscontainer">
            <div className="addmeasurements__container__newmeasurementscontainer-title">Aktualny pomiar</div>
                <div className="addmeasurements__container__newmeasurementscontainer__data">
                    <div className="addmeasurements__container__newmeasurementscontainer__data-input">
                    <DatePicker locale='pl' dateFormat='dd/MM/yyyy' selected={startDate} onChange={date => setStartDate(date)} /></div>
                    </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements">
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Waga</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input type="number" min="0" max="100" placeholder="Dodaj wagę"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Wzrost</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input type="number" min="0" max="300" placeholder="Dodaj wzrost"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Prawy biceps</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input type="number" min="0" max="100"placeholder="Prawy biceps"/></div>
                    </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Lewy biceps</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input type="number" min="0" max="100"placeholder="Lewy biceps"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Prawe przedramię</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input type="number" min="0" max="100"placeholder="Prawe przedramię"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Lewe przedramię</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input type="number" min="0" max="100" placeholder="Lewe przedramię"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Prawe udo</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input type="number" min="0" max="100"placeholder="Prawe udo"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-name">Lewe udo</div>
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-result"><input type="number" min="0" max="100" placeholder="Lewe udo"/></div>
                </div>
                <div className="addmeasurements__container__newmeasurementscontainer__elements__element">
                    <div className="addmeasurements__container__newmeasurementscontainer__elements__element-button"><button>Zaakceptuj zmiany</button></div>
                    
                </div>
                
                </div>
                </div>
            </div>
        </div>
    );
};

export default AddMeasurements;