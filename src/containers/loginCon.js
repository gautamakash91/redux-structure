import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/login/login";
import {
  close_snack_bar
} from "../actions/snackbar/snackbar_action";
import {
  setLogin,
  set_home,
  setEmail,
  setPwd,
  login_email,
  clear_login
} from "../actions/login/loginActions";
export class Controller extends Component {
  render() {
    return (
      <Login {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    clear_login: () => {
      dispatch(clear_login())
    },
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    setEmail: (payload) => {
      dispatch(setEmail(payload));
    },
    setPwd: (payload) => {
      dispatch(setPwd(payload));
    },
    login_email: (login) => {
      dispatch(login_email(login));
    },
    setLogin: (type, email, user_token, profile_img) => {
      dispatch(setLogin(type, email, user_token, profile_img));
    },
    set_home: () => {
      dispatch(set_home())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);