import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { logoutUser } from "../actions/userActions";
const Navbar = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch=useDispatch()
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <div className="container-fluid">
        <Link class="navbar-brand" to="/">
          PizzaLove
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {currentUser ? (
              <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {currentUser.name}
              </Dropdown.Toggle>
            
              <Dropdown.Menu>
                <Dropdown.Item href="/orders" >Orders</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <span className="busket">
                  <i class="fas fa-cart-plus"></i>{" "}
                  <span className="cart__number">
                    {cartstate.cartItems.length}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
