import {
  CLOSE_SNACKBAR,
  SET_EMAIL,
  SET_PASSWORD,
  SET_NAME,
  SET_CONFIRM_PASSWORD,
  LOGIN,
  SET_SNACKBAR,
  NEW_PASSWORD,
  CONFIRM_PASSWORD,
  LOGOUT,
  HANDLEDRAWER,
  HANDLEDRAWER1,
  SET_LOGIN_CRED,
  SET_HOME,
  CLEAR_LOGIN,
} from "../../constants/login/ActionTypes";
const initial_state = {
  email: "saraschandraa@appstone.in",
  loggedIn: false,
  isHome: true,
  token: "",
  name: "",
  password: "",
  confirmpassword: "",
  newpassword: "",
  confirm_password: "",
  type: "",
  isRegistered: false,
  response_received: false,
  isPasswordchange: false,
  message: "",
  profile_img: "",
  mobileOpen: false,
  batchs: [],
  domains: [],
  data: [],
  building_id: "",
  user_id: "",
  departments: []
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state = { ...state, email: action.payload };
    case SET_PASSWORD:
      return state = { ...state, password: action.payload };
    case SET_NAME:
      return state = { ...state, name: action.payload };
    case SET_CONFIRM_PASSWORD:
      return state = { ...state, confirmpassword: action.payload };
    case CLEAR_LOGIN:
      return state = { ...state, email: "", password: "", isHome: true };
    case LOGIN:
      return state = {
        ...state,
        isHome: false,
        type: action.payload.type,
        token: action.payload.token,
        building_id: action.payload.building_id,
        user_id: action.payload.user_id,
        departments: action.payload.departments
      };
    case NEW_PASSWORD:
      return state = { ...state, newpassword: action.payload };
    case CONFIRM_PASSWORD:
      return state = { ...state, confirm_password: action.payload };
    case SET_SNACKBAR:
      return state = { ...state, isRegistered: action.payload.status, loggedIn: action.payload.status, isPasswordchange: action.payload.status, response_received: true, message: action.payload.message };
    case CLOSE_SNACKBAR:
      return state = { ...state, response_received: action.payload };
    case LOGOUT:
      return state = {
        ...state,
        token: "",
        type: "",
        building_id: "",
        user_id: ""
      };
    case HANDLEDRAWER:
      return state = { ...state, mobileOpen: action.payload };
    case HANDLEDRAWER1:
      return state = { ...state, data: action.payload };
    case SET_LOGIN_CRED:
      return state = { ...state, loggedIn: true, isHome: true, };
    case SET_HOME:
      return state = { ...state, isHome: true };
    default:
      return state;
  }
}