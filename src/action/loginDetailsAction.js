import axios from "axios";
const loginDetailsUrl = "/assets/userdetails.json";

function loginAction(data) {
  return dispatch => {
    axios.get(loginDetailsUrl).then(res => {
      if (
        data.username === res.data.username &&
        data.password === res.data.password
      ) {
        dispatch({
          type: "LOGIN_DETAILS",
          validUser: true
        });
      } else {
        dispatch({
          type: "LOGIN_DETAILS",
          validUser: false
        });
      }
    });
  };
}
export default loginAction;
