import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../../styles/style.scss";

class Login extends Component {
  render() {
    const {
      login,
      setEmail,
      setPwd
    } = this.props;
    
    return (
      <div>
        <Grid className="login-background">
          <Grid container spacing={10} justify="center">
            <Grid item md={4} xs={12} >
              <Card className="login_card">
                <img
                  src={"https://firebasestorage.googleapis.com/v0/b/apartment-erp.appspot.com/o/socus%2Fsocus_1.webp?alt=media&token=52f5f2d8-c32d-41ec-8aa0-a523dbd62812"}
                  alt="no_img" style={{ height: 100 }}
                />
                <Typography className="login_heading">
                  SIGN IN
                </Typography>
                <Grid container justify="center">
                  <Grid item xs={12} >
                    <TextField
                      label="Email"
                      type="email"
                      fullWidth={true}
                      margin="normal"
                      variant="outlined"
                      required={true}
                      value={login.email}
                      onChange={(event) => { setEmail(event.target.value); }}
                    />
                    {login.email}
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      required={true}
                      value={login.password}
                      onChange={(event) => {
                        setPwd(event.target.value);
                      }}
                    />
                    
                  </Grid>
                  <br /><br /><br />
                  <Grid item xs={12}>
                    <br />
                    <Button
                      disabled={(login.email === "" || login.password === "") ? true : false}
                      id="outlined-email-input"
                      variant="contained"
                      color="primary"
                      fullWidth
                      margin="normal"
                      // onClick={() => { login_email(login) }}
                    >
                      Log In
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        
        </Grid>
      </div>
    );
  }
}
export default Login;
