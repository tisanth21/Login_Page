const loginDetailsReducer = function(state = {}, action) {
  switch (action.type) {
    case "LOGIN_DETAILS":
      return action.validUser;
    default:
      return state;
  }
};

export default loginDetailsReducer;
