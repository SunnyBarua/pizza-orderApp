import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"

const PrivateRoute=({...rest})=>{
    const {currentUser}=useSelector((state)=>state.loginUserReducer)
    return currentUser && currentUser.isAdmin ?<Route {...rest}/>:<Redirect to="/login"/>;
}
export default PrivateRoute