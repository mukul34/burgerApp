import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Chicken", type: "chicken" },
  { label: "Aalu", type: "aalu" },
];

const BuildControls = (props) => {
  console.log("purchaseable",props.purchasable);
  return (
    <div className={classes.BuildControls}>
      <p>
        CURRENT PRICE:<strong>{props.price}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          add={() => props.addIngredient(control.type)}
          remove={() => props.removeIngredient(control.type)}
          disable={props.disable[control.type]}
        />
      ))}

      <button className={classes.OrderButton} disabled={!props.purchasable}>
        ORDER NOW!!
      </button>
    </div>
  );
};

export default BuildControls;
