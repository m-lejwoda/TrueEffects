import React from 'react';

const Schedule = () => {
    return (
        <div className="schedule">
            <div className="schedule-title"></div>
            <div className="schedule__firstcontainer">
                <div className="schedule__firstcontainer-title">Kalendarz</div>
                <div className="schedule__firstcontainer-scheduler">Kalendarz</div>
            </div>
            <div className="schedule__secondcontainer">
                <div className="schedule__secondcontainer__elements">
                    <div className="schedule__secondcontainer__elements__top">
                        <div className="schedule__secondcontainer__elements__top-realized"></div>
                        <div className="schedule__secondcontainer__elements__top-toberealized"></div>
                    </div>
                    <div className="schedule__secondcontainer__elements__element">
                        <div className="schedule__secondcontainer__elements__element-name"></div>
                        <div className="schedule__secondcontainer__elements__element-data"></div>
                        <div className="schedule__secondcontainer__elements__element-button"></div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Schedule;