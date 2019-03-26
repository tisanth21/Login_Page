import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import dashBoardAction from "../action/dashBoardAction";
import Grid from "./grid/grid";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inValidUserRender = this.inValidUserRender.bind(this);
    this.validUserRender = this.validUserRender.bind(this);
  }

  componentWillMount() {
    this.props.getDashboardData();
  }

  inValidUserRender() {
    return (
      <h3>
        You are not autheticated to view this page..
        <Link to="/">please login</Link>
      </h3>
    );
  }

  validUserRender() {
    return <Grid />;
  }
  render() {
    return !this.props.validUser ? (
      <this.validUserRender />
    ) : (
      <this.inValidUserRender />
    );
  }
}

function mapStateToProps(state) {
  return {
    loginDetails: state.loginDetails,
    dashBoardData: state.dashBoardData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDashboardData: () => dispatch(dashBoardAction())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
