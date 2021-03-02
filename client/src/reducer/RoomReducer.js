function RoomReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, ...{ [action.name]: action.value } };
    default:
      return state;
  }
}

export default RoomReducer;
