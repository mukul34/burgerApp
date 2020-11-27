import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active={false}>
          Home
        </NavigationItem>
        <NavigationItem link="/" active={false}>
          Checkout
        </NavigationItem>
      </ul>
    );
}

export default NavigationItems
