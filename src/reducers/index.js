import { combineReducers } from "redux";
import login from "./login/login-reducer";
import signup from "./signup/signup-reducer";

export default combineReducers({
    login,
    signup
});
