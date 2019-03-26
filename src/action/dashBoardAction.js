import axios from "axios";
const dashBoardActionUrl = "/assets/dashboard.json";

function dashBoardAction(data) {
  return dispatch => {
    axios.get(dashBoardActionUrl).then(res => {
      dispatch({
        type: "DASHBOARD_DETAILS",
        data: res.data.user 
      });
    });
  };
}
export default dashBoardAction;
