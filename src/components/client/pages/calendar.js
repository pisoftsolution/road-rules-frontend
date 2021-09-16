import React, { useState, useEffect } from 'react';
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
  const [shouldCall] = useState(false);
  const dispatch = useDispatch();
  const slots = useSelector((state) => state.slotReducer?.slotData?.b);
  console.log(slots);

  useEffect(() => {
    dispatch(getSlot());
  }, [shouldCall]);

  return (
    <div className="schedule">
      <Calendar
        localizer={localizer}
        events={slots.map((b) => {
          return {
            id: b._id,
            title: b.time,
            allDay: true,
            date: new Date(b.date),
            end: new Date(b.date)
          };
        })}
        startAccessor="date"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
}

export default Schedule;
