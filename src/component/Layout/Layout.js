import React, { Fragment } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import  classes from "./Layout.module.css"

function Layout(props) {
  
  return (
    <Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
