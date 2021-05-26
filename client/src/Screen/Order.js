import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from '../components/Error'
import Loading from '../components/Loading'

const Order = () => {
    const dispatch=useDispatch()
    const orderstate = useSelector(state=>state.getUserOrdersReducer)
    const {orders , error , loading} = orderstate
    useEffect(() => {

        dispatch(getUserOrders())
      
    }, [])
    return (
        <>
        {orders.length>0 ? (<div className="order">
            <h1 style={{fontSize:'35px',textAlign:'center'}}>My Orders</h1>
            <div className="row justify-content-center" >
                {loading && (<Loading/>)}
                {error && (<Error error="Something went wrong!"/>)}
                {orders && orders.map(order=>{
                    return <div className="col-md-8" style={{backgroundColor:'tomato',color:'white'}}>
                        <div className="flex-container">
                            <div className="text-left w-100 m-1">
                                <h2 >Items</h2>
                             {order.orderItems.map(item=>{
                                 return <div>
                                     <h3>{item.name} [{item.varient}] *{item.quantity}=${item.price}</h3>
                                 </div>
                             })}
                            </div>
                            <div className="text-left w-100 m-1">
                            <h2 style={{fontSize:'26px'}}>Address</h2>
                           <h3 style={{fontSize:'20px'}}>Street: {order.shippingAddress.street}</h3>
                           <h3>City: {order.shippingAddress.city}</h3>
                           <h3>Country: {order.shippingAddress.country}</h3>
                           <h3>Pincode: {order.shippingAddress.pincode}</h3>

                            </div>
                            <div className="text-left w-100 m-1">
                            <h2 style={{fontSize:'26px'}}>Order Info</h2>
                            <h3>Order Amount: {order.orderAmount}</h3>
                            <h3>Date: {order.createdAt.substring(0,10)}</h3>
                            <h3>Transaction Id: {order.transactionId}</h3>
                            <h3>Order Id: {order._id}</h3>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        </div>):(
            <h1 style={{textAlign:"center"}}>You don't have any order</h1>
            
        )}
        </>
    )
}

export default Order
