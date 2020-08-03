import React, { Component } from "react";
import { connect } from "react-redux";
import DrawerOptions from "../../components/router/drawer";
import {
  handleDrawerToggle,
  onLogout
} from "../../actions/loginActions";
import { get_final_unit_details } from "../../actions/units/units_action";
export class DrawerOptionCon extends Component {
  render() {
    return (
      <DrawerOptions {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    login: store.login,
    units: store.units
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(onLogout())
    },
    handleDrawerToggle: (mobileOpen) => {
      dispatch(handleDrawerToggle(mobileOpen));
    },
    get_final_unit_details: (token, unit_id, building_id) => {
      dispatch(get_final_unit_details(token, unit_id, building_id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerOptionCon);