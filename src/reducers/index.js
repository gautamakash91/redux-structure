import { combineReducers } from "redux";
import login from "./login/login-reducer";
import snackbar from "./snackbar/snackbar_reducer";

export default combineReducers({
    login,
    snackbar
});
