import axios from "axios"
import { GET_USER_ORDERS_FAILED, GET_USER_ORDERS_REQUEST, GET_USER_ORDERS_SUCCESS, PLACE_ORDER_FAILED, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS } from "../constants/orderConstants"

export const placeOrder=(token,subtotal)=>async(dispatch,getState)=>{
    dispatch({type:PLACE_ORDER_REQUEST})
    const currentUser=getState().loginUserReducer.currentUser
    const cartItems=getState().cartReducer.cartItems

    try{
        const response=await axios.post("orders/placeorder",{token,subtotal,currentUser,cartItems})
        dispatch({type:PLACE_ORDER_SUCCESS})
        console.log(response)

    }catch(error){
        dispatch({type:PLACE_ORDER_FAILED})
        console.log(error)
    }
}


export const getUserOrders=()=>async (dispatch,getState)=>{

    const currentUser = getState().loginUserReducer.currentUser
    dispatch({type:GET_USER_ORDERS_REQUEST})
    
    try {
        const response = await axios.post('orders/getuserorders' , {userid : currentUser._id})
        console.log(response);    
        dispatch({type:GET_USER_ORDERS_SUCCESS , payload : response.data})
    } catch (error) {
        dispatch({type:GET_USER_ORDERS_FAILED , payload : error})
    }
  
  }