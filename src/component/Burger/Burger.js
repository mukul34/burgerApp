import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

function Burger(props) {
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="cheese" />

      <BurgerIngredients type="salad" />

      <BurgerIngredients type="chicken" />
      <BurgerIngredients type="cheese" />

      <BurgerIngredients type="bread-bottom" />
    </div>
  );
}

export default Burger;
