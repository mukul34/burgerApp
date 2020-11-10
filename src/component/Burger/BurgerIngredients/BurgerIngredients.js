import React from 'react'
import classes from "./BurgerIngredients.module.css"
import PropTypes from "prop-types";

function BurgerIngredients(props) {
    console.log(classes.BreadBottom);
    
    let ingredients=null;
    switch(props.type){
        case ("bread-bottom"):
            ingredients=<div className={classes.BreadBottom}></div>;
            break;
        case ("bread-top"):
            ingredients = (
              <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
              </div>
            );
            break;
        case ("chicken"):
            ingredients=<div className={classes.Chicken}></div>
            break;
        case ("cheese"):
            ingredients=<div className={classes.Cheese}></div>
            break;
        case ("salad"):
            ingredients = <div className={classes.Salad}></div>;
            break;
        case ("aalu"):
            ingredients = <div className={classes.Aalu}></div>;
            break;
        default:
            
            ingredients = (
              
                   <div className={classes.Aalu}></div>
            
           
            );



    }

    return (
    
            ingredients
        
    )
    
}

BurgerIngredients.prototype={
    type: PropTypes.string.isRequired
}

export default BurgerIngredients
