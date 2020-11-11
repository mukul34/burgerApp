import React, { Component, Fragment } from "react";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import Burger from "../../component/Burger/Burger";


const INGREDIENTS_PRICE = {
  salad: 10,
  cheese: 40,
  chicken: 50,
  aalu: 20,
};

class BurgerBuilder extends Component {
  state={
    ingredients:{
      salad:0,
      cheese:0,
      chicken:0,
      aalu:0
    },
    totalPrice:30
  }

  addIngredientHandler=(type)=>{
      const oldcount=this.state.ingredients[type];
      const newcount=oldcount+1;
      const updatedIngredients={
        ...this.state.ingredients
      }
      updatedIngredients[type]=newcount;
      const priceAddition=INGREDIENTS_PRICE[type]
      const oldPrice=this.state.totalPrice;
      const newPrice=oldPrice+priceAddition;

      this.setState({
        totalPrice:newPrice,
        ingredients:updatedIngredients
      })

  }

  removeIngredientHandler=(type)=>{
    const oldcount = this.state.ingredients[type];
    if(oldcount<=0){
      return
    }
    const newcount = oldcount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newcount;
    const priceDeduction = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });

  }
  
  
  
  render() {
    const disabledInfo={
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key]=disabledInfo[key]<=0;
    }
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} disable={disabledInfo} />
        
      </Fragment>
    );
  }
}

export default BurgerBuilder;
