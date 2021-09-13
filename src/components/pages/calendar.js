import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap'
import './calendar.css';

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
const myEventsList = [
    {
        id: 0,
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        id:1,
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        id:3,
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function Schedule() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(myEventsList);

    const handleAddEvent =() => {
        setAllEvents([...allEvents, newEvent]);
    }
    return (
        <div className="App">
            <div>
                <input
                  className="timefix" 
                  type="text" 
                  placeholder="Add Title" 
                  value={newEvent.title} 
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
                  />
                <DatePicker
                  className="timefix" 
                  placeholderText="Start Date" 
                  style={{ marginRight: "10px" }} 
                  selected={newEvent.start} 
                  onChange={(start) => setNewEvent ({ ...newEvent, start })}
                />
                <DatePicker
                  className="timefix" 
                  placeholderText="End Date" 
                  selected={newEvent.end} 
                  onChange={(end) => 
                    setNewEvent ({ ...newEvent, end })} />
                <Button 
                 className="addevent" 
                  onClick={handleAddEvent}>
                    Add Event
                </Button>
            </div>
            <Calendar 
             localizer={localizer} 
             events={allEvents} 
             startAccessor="start" 
             endAccessor="end" 
             style={{ height: 500, margin: "50px" }} 
            />
        </div>
    );
}

export default Schedule;

































// import moment from 'moment';
// import React from 'react';
// import BigCalendar from 'react-big-calendar'
// import events from './events';

//    moment.locale('en-GB');
//    Calendar.momentLocalizer(moment)

//    const allViews = Object
//     .keys(BigCalendar.views)
//     .map(k => BigCalendar.views[k])

// const Everyday = () => (
//   <div style={{ height: 700 }}>
//     <BigCalendar
//       events={events}
//       step={60}
//       views={allViews}
//       defaultDate={new Date(2015, 3, 1)}
//     />
//   </div>
// );

// export default Everyday;
