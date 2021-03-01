function FriendReducer(state, action) {
  switch (action.type) {
    case "GET_LIST":
      return [...state, ...action.value];
    default:
      return state;
  }
}

export default FriendReducer;
