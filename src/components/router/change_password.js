import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../styles/style";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Snackbar from "../../components/snackbar/snackbar";
class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.reset_password()
  }
  render() {
    const {
      login,
      change_password,
      set_current_password,
      set_new_password,
      set_confirm_new_password,
      change_password_function,
      close_snack_bar,
      snackbar
    } = this.props;
    return (
      <Grid container justify="center">
        <Grid container item xs={12} lg={5}>
          <Card style={{ width: "100%", marginTop: 20 }}>
            <CardContent>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Change Password
                </Typography>
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  label="Current Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={change_password.current_password}
                  onChange={(event) => { set_current_password(event.target.value); }}
                  InputProps={{ classes: { input: this.props.classes.textfield } }}
                  InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  label="New Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={change_password.new_password}
                  onChange={(event) => { set_new_password(event.target.value); }}
                  InputProps={{ classes: { input: this.props.classes.textfield } }}
                  InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={change_password.confirm_new_password}
                  onChange={(event) => { set_confirm_new_password(event.target.value); }}
                  InputProps={{ classes: { input: this.props.classes.textfield } }}
                  InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                />
              </Grid>
              <Grid item xs={12}>
                {change_password.new_password !== change_password.confirm_new_password && <span style={{ color: "red" }}>"Passwords Do Not Match"</span>}
              </Grid>
              <Grid item lg={12} xs={12}>
                {change_password.new_password !== change_password.confirm_new_password ?
                  <Button
                    variant="outlined"
                    size="small"
                    disabled={true}
                  >
                    Change Password
                  </Button>
                  :
                  (change_password.new_password === "" ?
                    <Button
                      variant="outlined"
                      size="small"
                      disabled={true}
                    >
                      Change Password
                    </Button>
                    :
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        change_password_function(login.token, change_password.new_password, change_password.current_password)
                      }}
                    >
                      Change Password
                  </Button>)
                }
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Snackbar
          open={snackbar.response_received}
          close_snack_bar={close_snack_bar}
          message={snackbar.message}
        />
      </Grid>
    );
  }
}
export default withStyles(styles)(ChangePassword);
