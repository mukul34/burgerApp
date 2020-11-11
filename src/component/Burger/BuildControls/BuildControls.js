
import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";


const controls=[
    {label:"Salad",type:"salad"},
    {label:"Cheese",type:"cheese"},
    {label:"Chicken",type:"chicken"},
    {label:"Aalu",type:"aalu"}

]



const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          add={() => props.addIngredient(control.type)}
          remove={() => props.removeIngredient(control.type)}
          disable={props.disable[control.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
