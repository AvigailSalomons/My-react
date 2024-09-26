const initialState = {
    evedates: [], // רשימת האירועים והתאריכים
    selectedDate: null, // התאריך שנבחר
  };
  
  export default function calendarReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_SELECTED_DATE':
        return { ...state, selectedDate: action.payload };
      case 'SET_EVENT_DATES':
        return { ...state, evedates: action.payload };
      case 'ADD_EVENT':
        return { ...state, evedates: [...state.evedates, action.payload] };
      default:
        return state;
    }
  }
  