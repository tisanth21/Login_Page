import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import loginAction from "../action/loginDetailsAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetails: {},
      validUserErr: false,
      username: "",
      password: ""
    };

    this.validateLogin = this.validateLogin.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validUser !== nextProps.validUser && nextProps.validUser) {
      this.props.history.push("/home");
    }
  }

  handleChange(event) {
    let key = event.nativeEvent.target.name;
    this.setState({ [key]: event.nativeEvent.target.value });
  }

  validateLogin() {
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.dispatchLoginDetails(data);
  }

  updateDetails(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="col-4 mx-auto mt-5 formCss">
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="username"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <div className="text-center">
          <button
            disabled={!(this.state.password && this.state.username)}
            className="btn btn-primary mr-3"
            onClick={this.validateLogin}
          >
            Submit
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              this.setState({
                username: "",
                password: "",
                validUserErr: false
              });
            }}
          >
            Reset
          </button>
          {!this.props.validUser ? (
            <p className="text-danger my-2">
              Invalid username or password..Please try again
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    validUser: state.validUser,
    dashBoardData: state.dashBoardData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoginDetails: data => dispatch(loginAction(data))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
