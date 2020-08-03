import React from "react";
import Icon from "@material-ui/core/Icon";
import {
  Redirect
} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
export default class LG extends React.Component {
  render() {
    const { login } = this.props;
    if (login.token === "") {
      return <Redirect to="/" />
    }
    return (
      <IconButton color="inherit"
        onClick={() => {
          localStorage.removeItem("socus_token");
          localStorage.removeItem("socus_type");
          localStorage.removeItem("socus_building_id");
          localStorage.removeItem('socus_departments');
          localStorage.removeItem('socus_user_id');
          this.props.onLogout()
        }}>
        <Icon style={{ color: "#3f51b5" }}>power_settings_new</Icon>
      </IconButton>
    )
  }
}