import React, { Component } from "react";
import { connect } from "react-redux";
import LoginController from "../../components/router/controller";
import { setLogin } from "../../actions/loginActions";
import { get_all_unit_details } from "../../actions/units/units_action";
export class Controller_con extends Component {
  render() {
    return (
      <LoginController {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    login: store.login,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    setLogin: (obj) => {
      dispatch(setLogin(obj));
    },
    get_all_unit_details: (user_token, building_id) => {
      dispatch(get_all_unit_details(user_token, building_id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller_con);