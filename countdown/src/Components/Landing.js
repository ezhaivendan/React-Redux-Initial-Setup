import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LOGOUTUSER } from '../Actions/Action';
import Navbar from './Navbar';

const mapStatetoProps = (state) => ({eventDetails: state.eventInfo});

function Landing({eventDetails}) {
    const calculateDate = (givenTitle, givenDate) => {
        let [targetYear, targetMonth, targetDate] = givenDate.split('-');
        let currentDate = new Date().getDate();
        let currentMonth = new Date().getMonth() +1;
        let currentYear = new Date().getFullYear();

        if((targetYear == currentYear) && (targetMonth == currentMonth) && (targetDate == currentDate)) { 
            return givenTitle;
        }

        if( targetYear < currentYear && targetMonth < currentMonth) {
            targetYear = ++currentYear;
        }
        else if( (targetYear < currentYear || targetYear == currentYear) && (targetMonth >= currentMonth)) {
        
            if((targetMonth == currentMonth) && (targetDate <= currentDate)) {
                targetYear = ++currentYear;
            } else {
                targetYear = currentYear;
            }
        }
        else {
            targetYear = ++currentYear;
        }
        return [targetYear, targetMonth, targetDate];
    }

    const triggerTimer = () => {
        eventDetails.forEach((event, index) => {
            let getCalculateDate = calculateDate(event.eventName, event.eventDate);
            if(getCalculateDate === event.eventName) {
                document.getElementById(`timerControl-${index}`).style.display='none'
                document.getElementById(`ShowEventInfo-${index}`).innerHTML = 'Happy Birtday......';
            } else {

                let [year, month, date] = calculateDate(event.eventName, event.eventDate);
                let today = new Date().getTime();
                let endDate = new Date(year, month-1, date).getTime();
                document.getElementById(`showDay-${index}`).innerHTML = Math.floor((endDate-today)/(1000*60*60*24))
                document.getElementById(`showHours-${index}`).innerHTML = Math.floor((endDate-today)%(1000*60*60*24)/(1000*60*60))
                document.getElementById(`showMins-${index}`).innerHTML = Math.floor((endDate-today)%(1000*60*60)/(1000*60))
                document.getElementById(`showSec-${index}`).innerHTML = Math.floor((endDate-today)%(1000*60)/(1000))
            }
        })
    }
    setInterval(function () {
        triggerTimer()
    }, 1000)

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <div className="list-container">
                    {
                        eventDetails.map((event, index) => 
                        <div className="event-row" key={index}>
                            <div>{event.eventName}</div>



                            <p>{event.eventDate}</p>
                            <div id={`timerControl-${index}`}>
                                <span id={`showDay-${index}`}></span> &nbsp;&nbsp;
                                <span id={`showHours-${index}`}></span> &nbsp;&nbsp;
                                <span id={`showMins-${index}`}></span> &nbsp;&nbsp;
                                <span id={`showSec-${index}`}></span>
                            </div>
                            <div id={`ShowEventInfo-${index}`}></div>
                        </div>
                        )
                    }
                </div>
            </header>
        </div>
    )
    
}

const routerComponet = withRouter(Landing);
export default connect(mapStatetoProps)(routerComponet);
