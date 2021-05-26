import Navbar from "./components/Navbar";
import Home from "./Screen/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Screen/Cart";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import Order from "./Screen/Order";
import Admin from "./Screen/Admin";
import Pizzaslist from "./Screen/Pizzaslist";
import PrivateRoute from "./components/PrivateRoute";
import Userslist from "./Screen/Userslist";
import Orderslist from "./Screen/Orderslist";
import Addpizza from "./Screen/Addpizza";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
            
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        <Route exact path="/orders" component={Order}/>
       
        <Route path="/admin" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
