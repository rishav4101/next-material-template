import React, { useState } from "react";
import Router from "next/router";
import {
  AppBar,
  Typography,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Badge,
  CssBaseline
} from "@material-ui/core";
import { AccountCircle, Add, Menu, Notifications } from "@material-ui/icons";
import Link from "next/link";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  icon: {
    color: "#fff"
  },
  badge: {
    color: "#fff"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={e => handleDrawerOpen()}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            className={classes.title}
            onClick={() => Router.replace("/")}
          >
            Next Template
          </Typography>
          <div style={{ flex: "right" }}>
            <IconButton aria-label="4 pending messages">
              <Badge badgeContent={4} className={classes.badge}>
                <Notifications color="primary" className={classes.icon} />
              </Badge>
            </IconButton>
            <Link>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper
        }}
        open={open}
        onClose={e => handleDrawerClose()}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button onClick={e => {}}>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Create Post" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
