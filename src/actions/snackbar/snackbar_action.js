import {
    SET_SNACK_BAR,
    CLOSE_SNACK_BAR
} from "../../constants/snackbar/snackbar";
//   FUNCTION TO CLOSE SNACKBAR
export function close_snack_bar() {
    return {
        type: CLOSE_SNACK_BAR
    };
}
//   FUNCTION FOR SHOWING SNACK BAR
export function set_snack_bar(payload, message) {
    var data = [];
    data.status = payload;
    data.message = message;
    return {
        type: SET_SNACK_BAR,
        payload: data
    };
}