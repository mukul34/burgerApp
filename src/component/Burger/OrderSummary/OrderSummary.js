import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
const ingredientSummary=Object.keys(props.ingredients)
                            .map(igKey=>{
                                return (
                                  <li key={igKey}>
                                    <span style={{textTransform:"capitalize"}}>{igKey}</span>:
                                    {props.ingredients[igKey]}
                                  </li>
                                );
                            })
    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious Burger with following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
        <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
      </Fragment>
    );
}

export default OrderSummary
