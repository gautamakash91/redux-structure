import React, { Component } from "react";
import { connect } from "react-redux";
import Routes from "../../components/router/router";
// import {
//   onLogout
// } from "../../actions/login/loginActions";

export class RoutesCon extends Component {
  render() {
    return (
      <Routes {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    login: store.login
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    // onLogout: (user_token, uuid) => {
    //   dispatch(onLogout(user_token, uuid));
    // },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RoutesCon);