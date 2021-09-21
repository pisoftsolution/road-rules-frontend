import React, { useEffect } from 'react';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';
import { getSlot } from '../../../redux/actions/slot';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SlotDetails from './slotDetails';

const locales = {
  'en-US': require('date-fns/locale/en-US')
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

function Schedule() {

  const dispatch = useDispatch();
  let slots = useSelector((state) => state.slotReducer?.slotData?.b)
  let myEventsList = []
  if (slots) {
    slots = slots.map((b) => {
      // const startDate = new Date(b.date + "T" + b.time);
      // const endDate = new Date(startDate.getTime() + 60 * 1000 * 60);
      return myEventsList.push({
        id: b._id,
        start: new Date(b.date),
        end: new Date(b.date),
        title: b.time,
      });
    });
  }
  console.log(myEventsList);
  console.log(slots);
  const history = useHistory();
  useEffect(() => {
    dispatch(getSlot()); 
  }, []);


  //   const handleRoute = ()=>{
  //       history.push(`/slotdetails`);
  //   }

  const popoverButtonClickHandler = () => {
    history.push(`/slotdetails`);
  };

  return (
    <div className="App">
      {myEventsList && myEventsList.length > 0 ? (
        <Calendar
          localizer={localizer}
          events={myEventsList}
          components={{
            event: SlotDetails({
              onPopoverButtonClick: popoverButtonClickHandler
            })
          }}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: '50px' }}
        />
       ) : (
        '')} 
    </div>
  );
}

export default Schedule;

SlotDetails.displayName = 'SlotDetails';







// import React, { useState, useEffect } from "react";
// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "react-datepicker/dist/react-datepicker.css";
// import './calendar.css';
// import { getSlot } from "../../../redux/actions/slot";
// import { useDispatch, useSelector } from 'react-redux'

// const locales = {
//     "en-US": require("date-fns/locale/en-US"),
// };
// const localizer = dateFnsLocalizer({
//     format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales,
// });

// function Schedule() {
//     const [shouldCall] = useState(false);
//     const dispatch = useDispatch();
//     const slots = useSelector((state) => state.slotReducer?.slotData?.b)
//     useEffect(() => {
//         dispatch(getSlot())
//       }, [shouldCall])
//     return (
//         <div className="App">
//            {slots && slots.length > 0 ? (
//             <Calendar 
//              localizer={localizer} 
//              events={slots.map((b)=>{
//                return{
//                 id: b._id,
//                 title: b.time,
//                 allDay: true,
//                 start: new Date(b.date),
//                 end: new Date(b.date),
//                }
//              })} 
//              startAccessor="start" 
//              endAccessor="end" 
//              style={{ height: 500, margin: "50px" }} 
//             />
//             ) : (
//            '')} 
//         </div>
//     );
// }

// export default Schedule;


