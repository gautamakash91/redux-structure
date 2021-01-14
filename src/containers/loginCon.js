import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/login/login";
import {
  setEmail,
  setPwd,
  validateEmail
} from "../actions/login/loginActions";

export class LoginCon extends Component {
  render() {
    return (
      <Login {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
    login: store.login,
    signup: store.signup
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    setEmail: (payload) => {
      dispatch(setEmail(payload));
    },
    setPwd: (payload) => {
      dispatch(setPwd(payload));
    },
    validateEmail: (email) => {
      dispatch(validateEmail(email));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);