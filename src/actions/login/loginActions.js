import {
  SET_EMAIL,
  SET_PASSWORD,
  SET_EMAIL_VALID
} from "../../constants/login/ActionTypes";

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email
  };
}

export function setPwd(password) {
  return {
    type: SET_PASSWORD,
    payload: password
  };
}