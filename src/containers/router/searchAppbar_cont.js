import React, { Component } from "react";
import { connect } from "react-redux";
import PrimarySearchAppBar from "../../components/router/SearchAppBar";
import { onsearchFunc } from "../../actions/projects/projectActions";
import {
  onLogout,
  handleDrawerToggle
} from "../../actions/loginActions";
export class Searchbar_con extends Component {
  render() {
    return (
      <PrimarySearchAppBar {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    searchbar: store.project,
    login: store.login
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    onsearchFunc: (searchname) => {
      dispatch(onsearchFunc(searchname));
    },
    onLogout: () => {
      dispatch(onLogout());
    },
    handleDrawerToggle: (mobileOpen) => {
      dispatch(handleDrawerToggle(mobileOpen));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar_con);