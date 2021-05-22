import {
  SET_EMAIL,
  SET_PASSWORD
} from "../../constants/login/ActionTypes";

const initial_state = {
  email: "akash@email.com",
  password: "",
  type: ""
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_EMAIL:
      return state = { ...state, email: action.payload };
    case SET_PASSWORD:
      return state = { ...state, password: action.payload };
    default:
      return state;
  }
}