import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import LGCont from "../../containers/router/Lg_Cont";
import {
  all_admin_option,
  all_super_admin_option
} from "../../constants/router/router_const";
import Button from "@material-ui/core/Button";
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "white",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "white",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconStyle: {
    position: "relative",
    left: 8,
    top: 3,
    fontSize: 18,
    marginRight: 5
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  grow: {
    flexGrow: 1,
  },
}));
function MiniDrawer(props) {
  const classes = useStyles();
  const [open] = React.useState(true);
  function formatData(data) {
    var view =
      <TreeView
        defaultCollapseIcon={<Icon className="drawer_icons">keyboard_arrow_right</Icon>}
        defaultExpandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
      >
        {getParent(data)}
      </TreeView>
    return view;
  }
  function getParent(data) {
    return data.map((s, index) => (
      s.sub_units[0] && s.sub_units[0].sub_units.length > 0 ?
        <Link
          key={index}
          style={{ textDecoration: "none" }}
          replace={true}
          to={{
            pathname: "all_units",
            search: "?id=" + s._id + "=false=" + s.unit_type_id,
            final_unit: false
          }}>
          <TreeItem key={s._id} nodeId={s._id} label={s.unit_name}>
            {getParent(s.sub_units)}
          </TreeItem>
        </Link>
        :
        <div key={s._id} style={{ backgroundColor: "#f2f2f2" }}>
          <Link
            style={{ textDecoration: "none" }}
            replace={true}
            to={{
              pathname: "all_units",
              search: "?id=" + s._id + "=true=" + s.unit_type_id,
              final_unit: true
            }}>
            <Button>
              {s.unit_name}
            </Button>
          </Link>
        </div>
    ))
  }
  function sideBar(type, open, departments) {
    if (type === "A") {
      return (
        <div style={{ marginTop: 10 }}>
          {all_admin_option.map((option) => (
            <div key={option.name}>
              {option.name === "Master" &&
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                    style={{ paddingLeft: 18, backgroundColor: "white" }}
                    className="drawer_text"
                  >
                    <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", padding: 0 }}>
                    <List>
                      {option.data.map((s) => (
                        <Link key={s.link} to={s.link} className="drawer_text">
                          <ListItem button key={s.name}>
                            <ListItemIcon><Icon className="drawer_icons">{s.icon}</Icon></ListItemIcon>
                            {s.name}
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
              {option.name === "Payments" &&
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                    style={{ paddingLeft: 18, backgroundColor: "white" }}
                    className="drawer_text"
                  >
                    <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", padding: 0 }}>
                    <List>
                      {option.data.map((s) => (
                        <Link key={s.link} to={s.link} className="drawer_text">
                          <ListItem button key={s.name}>
                            <ListItemIcon><Icon className="drawer_icons">{s.icon}</Icon></ListItemIcon>
                            {s.name}
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
              {option.name === "Security" &&
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                    style={{ paddingLeft: 18, backgroundColor: "white" }}
                    className="drawer_text"
                  >
                    <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", padding: 0 }}>
                    <List>
                      {option.data.map((s) => (
                        <Link key={s.link} to={s.link} className="drawer_text">
                          <ListItem button key={s.name}>
                            <ListItemIcon><Icon className="drawer_icons">{s.icon}</Icon></ListItemIcon>
                            {s.name}
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
              {option.name === "Community" &&
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                    style={{ paddingLeft: 18, backgroundColor: "white" }}
                    className="drawer_text"
                  >
                    <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", padding: 0 }}>
                    <List>
                      {option.data.map((s) => (
                        <Link key={s.link} to={s.link} className="drawer_text">
                          <ListItem button key={s.name}>
                            <ListItemIcon><Icon className="drawer_icons">{s.icon}</Icon></ListItemIcon>
                            {s.name}
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
              {option.name === "Units" &&
                <ExpansionPanel>
                  <Link
                    style={{ textDecoration: "none" }}
                    replace={true}
                    to={{
                      pathname: "all_units",
                      search: "?id=" + null,
                      final_unit: false
                    }}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                      style={{ paddingLeft: 18, backgroundColor: "white" }}
                      className="drawer_text"
                    >
                      <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                      Units
                  </ExpansionPanelSummary>
                  </Link>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", paddingTop: 0, paddingBottom: 0, paddingLeft: 40 }}>
                    {formatData(props.units.unit_details)}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
              {option.name !== "Units" && option.name !== "Payments" && option.name !== "Master" && option.name !== "Community" && option.name !== "Security" &&
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", fontSize: 10 }}>
                  <ListItem className="drawer_text" button key={option.name}>
                    <ListItemIcon><Icon className="drawer_icons">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ListItem>
                </Link>
              }
            </div>)
          )}
          <Link to="change_password" style={{ textDecoration: "none", fontSize: 10 }}>
            <ListItem className="drawer_text" button>
              <ListItemIcon><Icon className="drawer_icons">settings</Icon></ListItemIcon>
              Change Password
            </ListItem>
          </Link>
        </div>
      );
    }
    else if (type === "SA") {
      return (
        <div style={{ marginTop: 10 }}>
          {all_super_admin_option.map((option) => (
            <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "black" }}>
              <ListItem button key={option.name}>
                <ListItemIcon><Icon className="drawer_icons">{option.icon}</Icon></ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItem>
            </Link>
          ))}
          <Link to="change_password" style={{ textDecoration: "none", fontSize: 10 }}>
            <ListItem className="drawer_text" button>
              <ListItemIcon><Icon className="drawer_icons">settings</Icon></ListItemIcon>
              Change Password
            </ListItem>
          </Link>
        </div>
      );
    } else if (type === "E") {
      return (
        <div style={{ marginTop: 10 }}>
          {all_admin_option.map((option) => (
            <div key={option.name}>
              {departments.includes("5e3d1e3cb0b7a220f73def69") && option.name === "Master" &&
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                    style={{ paddingLeft: 18, backgroundColor: "white" }}
                    className="drawer_text"
                  >
                    <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", padding: 0 }}>
                    <List>
                      {option.data.map((s) => (
                        <Link key={s.link} to={s.link} className="drawer_text">
                          <ListItem button key={s.name}>
                            <ListItemIcon><Icon className="drawer_icons">{s.icon}</Icon></ListItemIcon>
                            {s.name}
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
              {departments.includes("5e3d1e42b0b7a220f73def6a") && option.name === "Community" &&
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                    style={{ paddingLeft: 18, backgroundColor: "white" }}
                    className="drawer_text"
                  >
                    <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", padding: 0 }}>
                    <List>
                      {option.data.map((s) => (
                        <Link key={s.link} to={s.link} className="drawer_text">
                          <ListItem button key={s.name}>
                            <ListItemIcon><Icon className="drawer_icons">{s.icon}</Icon></ListItemIcon>
                            {s.name}
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
              {departments.includes("5e3d1cdf67a57e037477ff8d") && option.name === "Units" &&
                <ExpansionPanel>
                  <Link
                    style={{ textDecoration: "none" }}
                    replace={true}
                    to={{
                      pathname: "all_units",
                      search: "?id=" + null,
                      final_unit: false
                    }}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                      style={{ paddingLeft: 18, backgroundColor: "white" }}
                      className="drawer_text"
                    >
                      <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                      Units
                  </ExpansionPanelSummary>
                  </Link>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", paddingTop: 0, paddingBottom: 0, paddingLeft: 40 }}>
                    {formatData(props.units.unit_details)}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
              {departments.includes("5e3d1cfc67a57e037477ff8e") && option.name === "E-Notice" &&
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", fontSize: 10 }}>
                  <ListItem className="drawer_text" button key={option.name}>
                    <ListItemIcon><Icon className="drawer_icons">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ListItem>
                </Link>
              }
              {departments.includes("5e3d1d0e67a57e037477ff8f") && option.name === "Vendors" &&
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", fontSize: 10 }}>
                  <ListItem className="drawer_text" button key={option.name}>
                    <ListItemIcon><Icon className="drawer_icons">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ListItem>
                </Link>
              }
              {departments.includes("5e3d1d1d67a57e037477ff90") && option.name === "Amenities Booking" &&
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", fontSize: 10 }}>
                  <ListItem className="drawer_text" button key={option.name}>
                    <ListItemIcon><Icon className="drawer_icons">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ListItem>
                </Link>
              }
              {departments.includes("5e3d1d2a67a57e037477ff91") && option.name === "Employees" &&
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", fontSize: 10 }}>
                  <ListItem className="drawer_text" button key={option.name}>
                    <ListItemIcon><Icon className="drawer_icons">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ListItem>
                </Link>
              }
              {departments.includes("5e3d1d3567a57e037477ff92") && option.name === "Complaints" &&
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", fontSize: 10 }}>
                  <ListItem className="drawer_text" button key={option.name}>
                    <ListItemIcon><Icon className="drawer_icons">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ListItem>
                </Link>
              }
              {departments.includes("5e3d1d4767a57e037477ff93") && option.name === "Helpers" &&
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", fontSize: 10 }}>
                  <ListItem className="drawer_text" button key={option.name}>
                    <ListItemIcon><Icon className="drawer_icons">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ListItem>
                </Link>
              }
              {departments.includes("5e3d1d5367a57e037477ff94") && option.name === "Security" &&
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                    style={{ paddingLeft: 18, backgroundColor: "white" }}
                    className="drawer_text"
                  >
                    <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", padding: 0 }}>
                    <List>
                      {option.data.map((s) => (
                        <Link key={s.link} to={s.link} className="drawer_text">
                          <ListItem button key={s.name}>
                            <ListItemIcon><Icon className="drawer_icons">{s.icon}</Icon></ListItemIcon>
                            {s.name}
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
              {option.name === "Payments" && departments.includes("5ecb7bbd2c5c2e15a11d6ec8") &&
                <ExpansionPanel >
                  <ExpansionPanelSummary
                    expandIcon={<Icon className="drawer_icons">keyboard_arrow_down</Icon>}
                    style={{ paddingLeft: 18, backgroundColor: "white" }}
                    className="drawer_text"
                  >
                    <ListItemIcon><Icon className="drawer_icons" color="action">{option.icon}</Icon></ListItemIcon>
                    {option.name}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ backgroundColor: "#f2f2f2", padding: 0 }}>
                    <List>
                      {option.data.map((s) => (
                        <Link key={s.link} to={s.link} className="drawer_text">
                          <ListItem button key={s.name}>
                            <ListItemIcon><Icon className="drawer_icons">{s.icon}</Icon></ListItemIcon>
                            {s.name}
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              }
            </div>))}
          <Link to="change_password" style={{ textDecoration: "none", fontSize: 10 }}>
            <ListItem className="drawer_text" button>
              <ListItemIcon><Icon className="drawer_icons">settings</Icon></ListItemIcon>
              Change Password
            </ListItem>
          </Link>
        </div>
      );
    }
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Link to="/">
            <img src={"https://firebasestorage.googleapis.com/v0/b/apartment-erp.appspot.com/o/socus%2Fsocus_1.webp?alt=media&token=52f5f2d8-c32d-41ec-8aa0-a523dbd62812"} alt="no_img" height="40" />
          </Link>
          <span style={{ color: "#b30047", marginLeft: 7 }}></span>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {props.type === "S" ?
              <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img_closed" >
                {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
              </Avatar>
              : ""}
            <LGCont />
          </div>
        </Toolbar>
      </AppBar>
      {props.type === "S" ? "" :
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <Divider />
          <List>
            {sideBar(props.type, open, props.departments)}
          </List>
        </Drawer>
      }
    </div>
  );
}
export default MiniDrawer;
