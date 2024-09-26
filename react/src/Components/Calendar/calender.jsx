import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents, setSelectedDate, addEvent, authenticate, updateEvent, deleteEvent } from '../../store/calendarSlice';

const Calandar = () => {
    const dispatch = useDispatch();
    const { events, selectedDate, isAuthenticated } = useSelector(state => state.calendar);
    
    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    const handleDateClick = (date) => {
        dispatch(setSelectedDate(date));
    };

    const handlePasswordSubmit = (password) => {
        dispatch(authenticate(password));
    };

    const handleAddEvent = (eventName) => {
        if (selectedDate && eventName) {
            const newEvent = { id: new Date().getTime(), date: selectedDate.toISOString(), title: eventName };
            dispatch(addEvent(newEvent));
        }
    };

    const handleUpdateEvent = (eventId, newTitle) => {
        dispatch(updateEvent({ id: eventId, title: newTitle }));
    };

    const handleDeleteEvent = (eventId) => {
        dispatch(deleteEvent(eventId));
    };

    return (
        <div className="app">
            <Calendar value={selectedDate} onClickDay={handleDateClick} />
            {/* Your calendar UI */}
        </div>
    );
};

export default Calandar;
