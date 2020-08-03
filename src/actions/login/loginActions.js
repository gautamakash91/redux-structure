import {
  LOGIN,
  SET_SNACKBAR,
  CLOSE_SNACKBAR,
  LOGOUT,
  HANDLEDRAWER,
  SET_HOME,
  firebase_config,
  SET_EMAIL,
  SET_PASSWORD,
  CLEAR_LOGIN,
} from "../../constants/login/ActionTypes";
import UNIVERSAL from "../../config/config.js";
import { set_snack_bar } from "../snackbar/snackbar_action";
import firebase from "firebase";
firebase.initializeApp(firebase_config);
export function setEmail(payload) {
  return {
    type: SET_EMAIL,
    payload: payload
  };
}
export function setPwd(payload) {
  return {
    type: SET_PASSWORD,
    payload: payload
  };
}
export function login_email(login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + "v1/login_with_email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: login.email,
        password: login.password
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          if (responseJson.result.user_type === "A" || responseJson.result.user_type === "SA" || responseJson.result.user_type === "E") {
            dispatch(setLogin(responseJson.result))
          } else {
            dispatch(set_snack_bar(true, "You do not have access to the portal"));
          }
        }
        else {
          dispatch(set_snack_bar(responseJson.status, responseJson.message));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
export function clear_login() {
  return {
    type: CLEAR_LOGIN
  };
}
export function set_home() {
  return {
    type: SET_HOME
  }
}
export function setLogin(payload) {
  localStorage.setItem('socus_type', payload.user_type)
  localStorage.setItem('socus_token', payload.user_token)
  localStorage.setItem('socus_building_id', payload.user_building_id)
  localStorage.setItem('socus_departments', payload.departments)
  localStorage.setItem('socus_user_id', payload.user_id)
  return {
    type: LOGIN,
    payload: {
      type: payload.user_type,
      token: payload.user_token,
      building_id: payload.user_building_id,
      user_id: payload.user_id,
      departments: payload.departments
    }
  };
}
export function setSnackbar(payload, message) {
  var data = [];
  data.status = payload;
  data.message = message;
  return {
    type: SET_SNACKBAR,
    payload: data
  };
}
export function closeSnackbar() {
  return {
    type: CLOSE_SNACKBAR,
    payload: false
  };
}
export function handleDrawerToggle(mobileOpen) {
  mobileOpen = !mobileOpen;
  return {
    type: HANDLEDRAWER,
    payload: mobileOpen
  };
}
export function onLogout() {
  return {
    type: LOGOUT
  }
}
export function logout_redirect() {
  return {
    type: LOGOUT
  };
}
export function ChangepasswordFunc(newpassword, confirmpassword, token) {
  return (dispatch) => {
    if (newpassword === confirmpassword && newpassword !== "" && confirmpassword !== "") {
      return fetch(UNIVERSAL.BASEURL + "v1/resetpassword", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: newpassword,
          token: token
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status) {
            dispatch(setSnackbar(responseJson.status, "Password Changed Successfully"));
          } else {
            dispatch(setSnackbar(responseJson.status, "Password could not be changed"));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      dispatch(setSnackbar(true, "password miss match"));
    }
  };
}
export function check_login_params() {
  if (localStorage.getItem("user_token") !== null) {
    return (dispatch) => {
      dispatch(setLogin(localStorage.getItem("type"), localStorage.getItem("email"), localStorage.getItem("user_token"), localStorage.getItem("profile_img"), localStorage.getItem("name")))
      if (!firebase.apps.length) {
        firebase.initializeApp(firebase_config);
      }
    }
  }
}