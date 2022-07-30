import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ADDEVENT } from '../Actions/Action';
import { withRouter } from 'react-router-dom';

const mapDispatchtoProps = (dispatch) => ({addEventInfo : (eventInfo) => dispatch(ADDEVENT(eventInfo))})

function AddEvent({addEventInfo, history}) {

    const [event, setevent] = useState({
        eventName       : '',
        eventDate       : '',
        eventReminder   : true
    })

    const formOnChange = (e) => {
        const {
            name,
            value
        } = e.target

        setevent({ ...event, [name] : value})
    }

    const handleAddEvent = (e) => {
        e.preventDefault();
        addEventInfo(event);
        history.push('/landing');
    }

    return (
        <div className="App">
            <header className="App-header">
               <form onSubmit={handleAddEvent}>
                   <div className="form-row">
                       <label>Event Name</label>
                       <input type="text" name="eventName" onChange ={formOnChange} required />
                   </div>

                   <div className="form-row">
                       <label>Event Date</label>
                       <input type="date" name="eventDate" onChange ={formOnChange} required/>
                   </div>

                   <div className="form-row">
                       <div>Do you celebrate every year?</div>
                        <div>
                            <input type="radio" name="eventReminder" onChange ={formOnChange} value="true" checked />
                            <label>Yes</label>
                        </div>

                        <div>
                            <input type="radio" name="eventReminder" onChange ={formOnChange} value="false" />
                            <label>No</label>
                        </div>
                   </div>

                   <button>Add Event</button>
               </form>
            </header>
        </div>
    )
}

const addEventComponent = withRouter(AddEvent);

export default connect(null, mapDispatchtoProps)(addEventComponent);
