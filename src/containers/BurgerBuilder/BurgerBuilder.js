import React, { Component, Fragment } from "react";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import Burger from "../../component/Burger/Burger";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";
import Modal from "../../component/UI/Modal/Modal";


const INGREDIENTS_PRICE = {
  salad: 10,
  cheese: 40,
  chicken: 50,
  aalu: 20,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      chicken: 0,
      aalu: 0,
    },
    totalPrice: 30,
    purchasable: false,
    purchasing:false
  };

  updatePurchaseState = (total) => {
    console.log(total)
    if (total > 30) {
      this.setState({
        purchasable: true,
      });
    } else {
      this.setState({
        purchasable: false,
      });
    }
  };

  addIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    const newcount = oldcount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newcount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(newPrice);
  };

  removeIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    if (oldcount <= 0) {
      return;
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
    this.updatePurchaseState(newPrice);
  };

  purchaseHandle=()=>{
    this.setState({
      purchasing:true
    })
  }

  closemodal=()=>{
    this.setState({
      purchasing:false
    })
  }

  purchaseContinue=()=>{
    alert("Order Has been made")

  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Fragment>
       <Modal show={this.state.purchasing} clicked={this.closemodal}>
        <OrderSummary price={this.state.totalPrice} ingredients={this.state.ingredients} cancel={this.closemodal} continue={this.purchaseContinue}/>
      </Modal>
      
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disable={disabledInfo}
          purchasable={this.state.purchasable}
          purchasing={this.purchaseHandle}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
