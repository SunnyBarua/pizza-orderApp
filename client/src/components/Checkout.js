import React from "react";
import StripeCheckout from "react-stripe-checkout"
import {useDispatch, useSelector} from "react-redux"
import { placeOrder } from "../actions/orderActions";
import Loading from "./Loading";
import Error from "./Error";
import Success from "./Success";

const Checkout = ({subtotal}) => {

  const orderstate=useSelector((state)=>state.placeOrderReducer)
  const {loading,success,error}=orderstate

  const dispatch=useDispatch()
  const tokenHandler=(token)=>{
      console.log(token)
      dispatch(placeOrder(token,subtotal))
    }
  return (
    <div>
      {loading && (<Loading/>)}
      {error &&(<Error error="Something went wrong"/>) }
      {success && (<Success success="Your order Placed Successfully"/>)}
      <StripeCheckout 
      amount={subtotal*100} 
      shippingAddress 
      token={tokenHandler}
      stripeKey="pk_test_51Ib9SxKUsbdFeLgsK6K3ZCk0M5jJj1j5MKAKKzzeQ5fGs8sVmuSipkJZii0MFioB09ktVLxm68y5sioyub6rYuKL00BWxESCNf"
      currency='USD'

      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
