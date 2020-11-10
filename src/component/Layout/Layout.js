import React, { Fragment } from "react";
import  classes from "./Layout.module.css"

function Layout(props) {
  
  return (
    <Fragment>
      <div>TOOLBAR,SIDEBAR,BACKDROP</div>
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
