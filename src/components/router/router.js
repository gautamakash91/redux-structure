import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from "../../containers/loginCon";
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
    let body;
    body =
        <div className={classes.root}>
          <main className={classes.content2}>
            <Route path="/" component={Login} />
          </main>
        </div>
        
      
    return (
      <Router>
        {body}
      </Router>
    );
  }
}

export default withStyles(styles)(Routes);
