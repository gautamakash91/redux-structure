import React, { Component } from "react";
import { connect } from "react-redux";
import LG from "../../components/router/logout_btn";
import { onLogout } from "../../actions/loginActions";
export class LGCont extends Component {
  render() {
    return (
      <LG {...this.props} />
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
    onLogout: () => {
      dispatch(onLogout());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LGCont);