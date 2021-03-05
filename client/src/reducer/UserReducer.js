function UserReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.value };
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [...state.friends, { nickname: action.value }],
      };
    default:
      return state;
  }
}

export default UserReducer;
