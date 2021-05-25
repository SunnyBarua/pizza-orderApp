import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router';
import Pizzaslist from './Pizzaslist';
import Userslist from './Userslist';

const Admin = () => {
    const userstate=useSelector((state)=>state.loginUserReducer)
    const {currentUser}=userstate;
    const dispatch=useDispatch()

    return (
        <div className="container">
           <div className="admin">
           <h2 style={{fontSize:'35px'}}>Admin</h2>
            <ul className="adminfunctions">
                <li><a href="/admin/userslist">Users List</a></li>
                <li><a href="/admin/pizzaslist">Pizzas List</a></li>
                <li><a href="">Add New Pizza</a></li>
                <li><a href="">Orders List</a></li>
            </ul>

            <Switch>
            
                <Route path="/admin/userslist" component ={Userslist} exact/>
                <Route path="/admin/pizzaslist" component ={Pizzaslist} exact/>
            </Switch>
           </div>
        </div>
    )
}

export default Admin

