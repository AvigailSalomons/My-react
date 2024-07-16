import React, { useState } from "react";
import Calendar from "react-calendar";
import "./App.css";
import './calender.css';

const App = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const Password_Update = (event) => {
        setPassword(event.target.value);
    };

    const Authenticate = () => {
        if (password === "123456") {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password");
        }
    };

    const Create_Event_Fun = () => {
        if (!isAuthenticated) {
            alert("You are not authorized to add events.");
            return;
        }

        // Check if there's already an event for the selected date
        const isEventExists = events.some(
            (event) => event.date.toDateString() === selectedDate.toDateString()
        );

        if (selectedDate && eventName && !isEventExists) {
            const newEvent = {
                id: new Date().getTime(),
                date: selectedDate,
                title: eventName,
            };
            setEvents([...events, newEvent]);
            setEventName("");
        }
    };

    const Update_Event_Fun = (eventId, newName) => {
        const updated_Events = events.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updated_Events);
    };

    const Delete_Event_Fun = (eventId) => {
        const updated_Events = events.filter((event) => event.id !== eventId);
        setEvents(updated_Events);
    };

    return (
        
        <div className="app">
            <h1>GeeksforGeeks Calendar Application</h1>
            <div className="container">
                <div className="calendar-container">
                    <Calendar
                        value={selectedDate}
                        onClickDay={Date_Click_Fun}
                        tileClassName={({ date }) =>
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : events.some(
                                      (event) =>
                                          event.date.toDateString() ===
                                          date.toDateString()
                                  )
                                ? "event-marked"
                                : ""
                        }
                    />
                    <div className="auth-container">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={Password_Update}
                        />
                        <button onClick={Authenticate}>Submit</button>
                    </div>
                </div>
                <div className="event-container">
                    {selectedDate && (
                        <div className="event-form">
                            <h2>Create Event</h2>
                            <p>Selected Date: {selectedDate.toDateString()}</p>
                            <input
                                type="text"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={Event_Data_Update}
                            />
                            <button
                                className="create-btn"
                                onClick={Create_Event_Fun}
                            >
                                Click Here to Add Event
                            </button>
                        </div>
                    )}
                    {events.length > 0 && selectedDate && (
                        <div className="event-list">
                            <h2>Events on {selectedDate.toDateString()}</h2>
                            <div className="event-cards">
                                {events.map((event) =>
                                    event.date.toDateString() ===
                                    selectedDate.toDateString() ? (
                                        <div
                                            key={event.id}
                                            className="event-card"
                                        >
                                            <div className="event-card-header">
                                                <span className="event-date">
                                                    {event.date.toDateString()}
                                                </span>
                                                <div className="event-actions">
                                                    <button
                                                        className="update-btn"
                                                        onClick={() =>
                                                            Update_Event_Fun(
                                                                event.id,
                                                                prompt(
                                                                    "ENTER NEW TITLE"
                                                                )
                                                            )
                                                        }
                                                    >
                                                        Update Event
                                                    </button>
                                                    <button
                                                        className="delete-btn"
                                                        onClick={() =>
                                                            Delete_Event_Fun(
                                                                event.id
                                                            )
                                                        }
                                                    >
                                                        Delete Event
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="event-card-body">
                                                <p className="event-title">
                                                    {event.title}
                                                </p>
                                            </div>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
