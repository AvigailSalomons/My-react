const initialState = {
    activeIndex: 0, // האינדקס של התמונה הנוכחית בקרוסלה
    images: [], // רשימת התמונות
  };
  
  export default function carouselReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_ACTIVE_INDEX':
        return { ...state, activeIndex: action.payload };
      case 'SET_IMAGES':
        return { ...state, images: action.payload };
      default:
        return state;
    }
  }
  