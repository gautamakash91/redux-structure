import React, { Component } from "react";
import { connect } from "react-redux";
import ChangePassword from "../../components/router/change_password";
import {
    set_current_password,
    set_new_password,
    set_confirm_new_password,
    reset_password,
    change_password_function
} from "../../actions/employee/change_password_action";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
export class Change_Password_Cont extends Component {
    render() {
        return (
            <ChangePassword {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        login: store.login,
        change_password: store.change_password,
        snackbar: store.snackbar
    };
};
export const mapDispatchToProps = dispatch => {
    return {
        set_current_password: (password) => {
            dispatch(set_current_password(password));
        },
        set_new_password: (password) => {
            dispatch(set_new_password(password));
        },
        set_confirm_new_password: (password) => {
            dispatch(set_confirm_new_password(password));
        },
        reset_password: () => {
            dispatch(reset_password());
        },
        change_password_function: (token, new_password, old_password) => {
            dispatch(change_password_function(token, new_password, old_password));
        },
        close_snack_bar: () => {
            dispatch(close_snack_bar());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Change_Password_Cont);