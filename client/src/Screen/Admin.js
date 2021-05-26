import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Addpizza from './Addpizza';
import Editpizza from './Editpizza';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import Userslist from './Userslist';

const Admin = () => {
    const userstate=useSelector((state)=>state.loginUserReducer)
    const {currentUser}=userstate;
    const dispatch=useDispatch()

    return (
        <div>
           <div className="admin">
           <h2 style={{fontSize:'35px',textAlign:'center'}}>Admin</h2>
            <div className="container admin">
            <ul className="adminfunctions">
                <li><Link to="/admin/userslist">Users List</Link></li>
                <li><Link to="/admin/pizzaslist">Pizzas List</Link></li>
                <li><Link to="/admin/orderslist">Orders List</Link></li>
                <li><Link to="/admin/addpizza">Add New Pizza</Link></li>
            </ul>
            </div>

        <Switch>
        <PrivateRoute exact path="/admin" component={Userslist}/> 
            
        <PrivateRoute exact path="/admin/pizzaslist" component={Pizzaslist}/> 
         
         <PrivateRoute exact path="/admin/userslist" component={Userslist} />
         <PrivateRoute exact path="/admin/orderslist" component={Orderslist} />    
         <PrivateRoute exact path="/admin/addpizza" component={Addpizza} /> 
         <PrivateRoute exact path="/admin/editpizza/:pizzaid" component={Editpizza} /> 
            </Switch>
           </div>
        </div>
    )
}

export default Admin

