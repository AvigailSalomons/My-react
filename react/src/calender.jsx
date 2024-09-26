import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./App.css";
import './calender.css';

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase'; 

const Calandar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [evedateName, setevedateName] = useState("");
    const [evedates, setevedates] = useState([]);
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            const querySnapshot = await getDocs(collection(db, "evedates"));
            const eventsFromDb = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setevedates(eventsFromDb);
        };
        fetchEvents();
    }, []);

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
        
    };

    const evedate_Data_Update = (evedate) => {
        setevedateName(evedate.target.value);
    };

    const Password_Update = (evedate) => {
        setPassword(evedate.target.value);
    };

    const Authenticate = () => {
        if (password === "123456") {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password");
        }
    };

    const Create_evedate_Fun = async () => {
        if (!isAuthenticated) {
            alert("You are not authorized to add evedates.");
            return;
        }

        const isevedateExists = evedates.some(
            (evedate) => new Date(evedate.date).toDateString() === selectedDate.toDateString()
        );

        if (selectedDate && evedateName && !isevedateExists) {
            const newevedate = {
                id: new Date().getTime(),
                date: selectedDate.toISOString(),
                title: evedateName,
            };
            setevedates([...evedates, newevedate]);
            setevedateName("");
            try {
                const docRef = await addDoc(collection(db, "evedates"), newevedate);
                console.log("evedate added with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding evedate: ", e);
            }
        } else if (isevedateExists) {
            alert("An event already exists on this date.");
        }                                         
        console.log("Attempting to add event to database");
    };

    const Update_evedate_Fun = (evedateId, newName) => {
        const updated_evedates = evedates.map((evedate) => {
            if (evedate.id === evedateId) {
                return {
                    ...evedate,
                    title: newName,
                };
            }
            return evedate;
        });
        setevedates(updated_evedates);
    };

    const Delete_evedate_Fun = (evedateId) => {
        const updated_evedates = evedates.filter((evedate) => evedate.id !== evedateId);
        setevedates(updated_evedates);
    };

    return (
        <div className="app">
            <div className="container">
                <div className="calendar-container">
                    <Calendar
                        value={selectedDate}
                        onClickDay={Date_Click_Fun}
                        tileClassName={({ date }) =>
                        
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : evedates.some(
                                      (evedate) =>
                                          new Date(evedate.date).toDateString() ===
                                          date.toDateString()
                                          
                                  )
                                  
                                ? "event-marked" // הוספת מחלקה לתאריכים עם אירועים
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
                <div className="evedate-container">
                    {selectedDate && (
                        <div className="evedate-form">
                            <h2>Create evedate</h2>
                            <p>Selected Date: {selectedDate.toDateString()}</p>
                            <input
                                type="text"
                                placeholder="evedate Name"
                                value={evedateName}
                                onChange={evedate_Data_Update}
                            />
                            <button
                                className="create-btn"
                                onClick={Create_evedate_Fun}
                            >
                                Click Here to Add evedate
                            </button>
                        </div>
                    )}
                    {evedates.length > 0 && selectedDate && (
                        <div className="evedate-list">
                            <h2>evedates on {selectedDate.toDateString()}</h2>
                            <div className="evedate-cards">
                                {evedates.map((evedate) =>
                                    new Date(evedate.date).toDateString() ===
                                    selectedDate.toDateString() ? (
                                        <div
                                            key={evedate.id}
                                            className="evedate-card"
                                        >
                                            <div className="evedate-card-header">
                                                <span className="evedate-date">
                                                    {new Date(evedate.date).toDateString()}
                                                </span>
                                                <div className="evedate-actions">
                                                    <button
                                                        className="update-btn"
                                                        onClick={() =>
                                                            Update_evedate_Fun(
                                                                evedate.id,
                                                                prompt(
                                                                    "ENTER NEW TITLE"
                                                                )
                                                            )
                                                        }
                                                    >
                                                        Update evedate
                                                    </button>
                                                    <button
                                                        className="delete-btn"
                                                        onClick={() =>
                                                            Delete_evedate_Fun(
                                                                evedate.id
                                                            )
                                                        }
                                                    >
                                                        Delete evedate
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="evedate-card-body">
                                                <p className="evedate-title">
                                                    {evedate.title}
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

export default Calandar;
