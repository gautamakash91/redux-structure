import {
  SET_EMAIL,
  SET_PASSWORD
} from "../../constants/login/ActionTypes";

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
