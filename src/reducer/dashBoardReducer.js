const dashBoardReducer = function(state = [], action) {
    switch (action.type) {
      case "DASHBOARD_DETAILS":
        return action.data;
      default:
        return state;
    }
  };
  
  export default dashBoardReducer;
  