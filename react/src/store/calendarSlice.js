import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; 

export const fetchEvents = createAsyncThunk('calendar/fetchEvents', async () => {
  const querySnapshot = await getDocs(collection(db, "evedates"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const addEvent = createAsyncThunk('calendar/addEvent', async (newEvent) => {
  const docRef = await addDoc(collection(db, "evedates"), newEvent);
  return { ...newEvent, id: docRef.id };
});

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [],
    selectedDate: null,
    isAuthenticated: false,
    status: 'idle',
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    authenticate: (state, action) => {
      state.isAuthenticated = action.payload === "123456";
    },
    updateEvent: (state, action) => {
      const { id, title } = action.payload;
      const event = state.events.find(event => event.id === id);
      if (event) {
        event.title = title;
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.events.push(action.payload);
      });
  }
});

export const { setSelectedDate, authenticate, updateEvent, deleteEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
