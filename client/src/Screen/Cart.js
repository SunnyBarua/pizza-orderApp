import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

const Cart = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{ fontSize: "40px", textAlign: "center" }}>My CART</h1>
      <div className="container cart">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 style={{ fontSize: "30px",marginLeft:'10px' }}>Pizza Details</h2>
            {cartItems.map((item) => (
              <div className="flex-container">
                <div className="food__details">
                  <div className="food__details__image">
                    <img
                      src={item.image}
                      style={{ height: "100px", width: "160px" }}
                    />
                  </div>
                  <div className="food__details__with__btn">

                  <div className="text-left m-1 food__details__desc">
                    <div>
                    <h1 style={{textTransform:'capitalize'}}>
                      {item.name}[{item.varient}]
                    </h1>
                    </div>
                   <div>
                   <h1>
                      Price: {item.quantity} * ${item.prices[0][item.varient]} =
                      $ {item.price}
                    </h1>
                   </div>
                    <div className="food__details__quantity">
                    <h1 style={{ display: "inline" }}>Quantity :</h1>
                    <i
                      class="fa fa-plus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    ></i>
                    <b>{item.quantity}</b>
                    <i
                      class="fa fa-minus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    ></i>

                    </div>
                    
                  </div>
                  <div className="m-1 trash__btn">
                  <i
                    className="fa fa-trash ml-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
                </div>
                </div>
                
              </div>
            ))}
          </div>
          <div className="col-md-4" style={{textAlign:'right'}}>
            <h2 style={{ fontSize: "35px" }}>SubTotal:{subtotal}$</h2>
            <Checkout subtotal={subtotal}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
