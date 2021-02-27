function FriendReducer(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return [...state, { nickName: action.value }];
    case "GET_LIST":
      return [...state, ...action.value];
    default:
      return state;
  }
}

export default FriendReducer;
