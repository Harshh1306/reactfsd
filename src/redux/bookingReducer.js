const initialState = {
  bookings: []
};

function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { bookings: [...state.bookings, action.payload] };
    case "REMOVE_TICKET":
      return { bookings: state.bookings.filter((_, i) => i !== action.payload) };
    case "CLEAR_BOOKINGS":
      return { bookings: [] };
    default:
      return state;
  }
}

export default bookingReducer;