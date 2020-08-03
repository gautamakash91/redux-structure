import {
  SET_SNACK_BAR,
  CLOSE_SNACK_BAR
} from "../../constants/snackbar/snackbar";
const initial_state = {
  response_received: false,
  message: ""
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_SNACK_BAR:
      return (state = { ...state, response_received: true, message: action.payload.message });
    case CLOSE_SNACK_BAR:
      return (state = { ...state, response_received: false, message: "" });
    default:
      return state;
  }
}
