import React, { Component } from "react";
import firebase from "firebase";
import { firebase_config } from "../../constants/ActionTypes";
export default class LoginController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      page: ""
    };
  }
  componentDidMount() {
    if (localStorage.getItem("socus_token") !== null) {
      var obj = {
        user_type: localStorage.getItem('socus_type'),
        user_token: localStorage.getItem('socus_token'),
        user_building_id: localStorage.getItem('socus_building_id'),
        departments: localStorage.getItem('socus_departments').split(","),
        user_id: localStorage.getItem('socus_user_id'),
      }
      this.props.setLogin(obj);
      this.props.get_all_unit_details(obj.user_token, obj.user_building_id)
      if (!firebase.apps.length) {
        firebase.initializeApp(firebase_config);
      }
    }
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}
