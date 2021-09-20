// import React, { useState, useEffect } from 'react';
// import format from 'date-fns/format';
// import getDay from 'date-fns/getDay';
// import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import './calendar.css';
// import { getSlot } from '../../../redux/actions/slot';
// import { useDispatch, useSelector } from 'react-redux';

// const locales = {
//   'en-US': require('date-fns/locale/en-US')
// };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales
// });

// function Schedule() {
//   const [shouldCall] = useState(false);
//   const dispatch = useDispatch();
//   const slots = useSelector((state) => state.slotReducer?.slotData?.b);
//   console.log(slots);

//   useEffect(() => {
//     dispatch(getSlot());
//   }, [shouldCall]);

//   return (
//     <div className="schedule">
//       <Calendar
//         localizer={localizer}
//         events={slots.map((b) => {
//           return {
//             id: b._id,
//             title: b.time,
//             allDay: true,
//             date: new Date(b.date),
//             end: new Date(b.date)
//           };
//         })}
//         startAccessor="date"
//         endAccessor="end"
//         style={{ height: 500, margin: '50px' }}
//       />
//     </div>
//   );
// }

// export default Schedule;

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
// const myEventsList = [
//     {
//         id: 0,
//         title: "Big Meeting",
//         allDay: true,
//         start: new Date(2021, 6, 0),
//         end: new Date(2021, 6, 0),
//     },
//     {
//         id:1,
//         title: "Vacation",
//         start: new Date(2021, 6, 7),
//         end: new Date(2021, 6, 10),
//     },
//     {
//         id:3,
//         title: "Conference",
//         start: new Date(2021, 6, 20),
//         end: new Date(2021, 6, 23),
//     },
// ];

function Schedule() {
  //   const [shouldCall] = useState(false);
  // const [allEvents] = useState(myEventsList);
  const dispatch = useDispatch();
  const slots = useSelector((state) => state.slotReducer?.slotData?.b);
  console.log(slots);
  const history = useHistory();
  useEffect(() => {
    dispatch(getSlot());
  }, [slots]);

  //   const handleRoute = ()=>{
  //       history.push(`/slotdetails`);
  //   }

  const popoverButtonClickHandler = () => {
    history.push(`/slotdetails`);
  };

  return (
    <div className="App">
      {slots && slots.length > 0 ? (
        <Calendar
          localizer={localizer}
          events={slots.map((b) => {
            return {
              id: b._id,
              title: b.time,
              allDay: true,
              start: new Date(b.date),
              end: new Date(b.date)
            };
          })}
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
        ''
      )}
    </div>
  );
}

export default Schedule;

SlotDetails.displayName = 'SlotDetails';
