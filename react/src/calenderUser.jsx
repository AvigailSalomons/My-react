import React from 'react';
import Calendar from 'react-calendar';

const CalanderUser = ({ events }) => {
  return (
    <div className="event-calendar">
      <Calendar
        tileClassName={({ date }) =>
          events.some(
            (event) => event.date.toDateString() === date.toDateString()
          )
            ? 'event-marked'
            : ''
        }
      />
    </div>
  );
};

export default CalanderUser;