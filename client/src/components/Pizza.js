import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {addToCart} from "../actions/cartActions"
const Pizza = ({ pizza }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const dispatch=useDispatch()

  const addCartHandler=()=>{
       dispatch(addToCart(pizza,quantity,varient))
  }
  return (
    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <div className="image">
          <img src={pizza.image} className="img-fluid" />
        </div>
        <div className="food__title">
          <h1>{pizza.name}</h1>
        </div>
      </div>
      <div className="flex-container">
        <div className="variant">
          <div className="food_varient">
            {" "}
            <p>Varients</p>
          </div>
          <div>
            <select
              value={varient}
              onChange={(e) => setVarient(e.target.value)}
            >
              {pizza.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="prices">
          <div className="food__quantity">
            <p>Quantity</p>
          </div>
          <div>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{x + 1}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div>
          <h1>Price: ${pizza.prices[0][varient] * quantity}</h1>
        </div>
        <div>
          <button className="btn" style={{height:'40px' ,width:'10rem'}} onClick={addCartHandler}>ADD TO CART</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modal__img__desc">
          <img src={pizza.image} alt="" className="img-fluid__modal"/>
        <p>{pizza.description}</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
           CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
