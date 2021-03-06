import React, { useState } from 'react'
import {useDispatch,useSelector} from 
"react-redux"
import { addPizza } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from "../components/Success"

const Addpizza = () => {
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [smallPrice,setSmallPrice]=useState()
    const [mediumPrice,setMediumPrice]=useState()
    const [largePrice,setLargePrice]=useState()
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    
    const addpizzastate=useSelector((state)=>state.addPizzaReducer)
    const {success,error,loading}=addpizzastate


    const formHandler=(e)=>{
        e.preventDefault();
        const pizza={
            name,
            image,
            description,
            category,
            prices:{
                small:smallPrice,
                medium:mediumPrice,
                large:largePrice
            }
        }
        console.log(pizza)
        dispatch(addPizza(pizza))
    }


    return (
        <div >
            <div className="container add__pizza">
                <h1>Add Pizza</h1>
                {loading && (<Loading/>)}
                {error && (<Error error="Something went wrong"/>)}
                {success && (<Success success="New Pizza added successfully"/>)}
                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Small Varient Price" value={smallPrice} onChange={(e)=>{setSmallPrice(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Medium Varient Price" value={mediumPrice} onChange={(e)=>{setMediumPrice(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Large Varient Price" value={largePrice} onChange={(e)=>{setLargePrice(e.target.value)}}/>
                    
                    <input className="form-control" type="text" placeholder="Category" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Image" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
                    <button className="btn add__pizza__btn" type="submit">Add Pizza</button>
                </form>
            </div>
        </div>
    )
}

export default Addpizza
