import React from "react";
import Signup from "../../components/signup/signup";
import { connect } from "react-redux";
import {
  signUp
} from "../../actions/signup/signupActions";

export class SignupCon extends React.Component{
  render(){
    return(
      <Signup {...this.props} />
    )
  }
}

export const mapStateToProps = store => {
  return {
    signup: store.signup
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    signUp: (payload) => {
      dispatch(signUp(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupCon);