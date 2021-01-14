import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from "../../containers/loginCon";
import SignupCon from "../../containers/signup/signupCon";

import {
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1) * 3,
  },
  content2: {
    flexGrow: 1,
  },
});
class Routes extends Component {
  render() {
    const { login, classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <main className={classes.content2}>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignupCon} />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(Routes);
