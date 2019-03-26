import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import dashBoardAction from "../../action/dashBoardAction";
import { AgGridReact } from "ag-grid-react";
// import "ag-grid-enterprise";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Id", field: "id" },
        { headerName: "Name", field: "name" },
        { headerName: "Age", field: "age" },
        { headerName: "gender", field: "gender" },
        { headerName: "email", field: "email" },
        { headerName: "phoneNo", field: "phoneNo" }
      ],
      rowData: []
    };
  }

  componentWillMount() {
    this.props.getDashboardData();
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridColumnApi = params.columnApi;
  };

  render() {
    return (
      <div style={{ width: "98%", height: "100%" }}>
        <div
          id="myGrid"
          className="ag-theme-balham-dark m-3"
          style={{
            height: "220px",
            width: "100%"
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            animateRows={true}
            rowData={this.props.dashBoardData}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
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
  )(Grid)
);
