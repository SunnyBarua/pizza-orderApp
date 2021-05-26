import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editPizza, getPizzaById } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

const Editpizza = ({match}) => {
    
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [smallPrice,setSmallPrice]=useState()
    const [mediumPrice,setMediumPrice]=useState()
    const [largePrice,setLargePrice]=useState()
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')

    const getpizzabyidstate=useSelector(state=>state.getPizzaByIdReducer)
    const {pizza,error,loading} =getpizzabyidstate

    const editpizzastate=useSelector(state=>state.editPizzaReducer)
    const {editloading,editerror,editsuccess}=editpizzastate

    useEffect(()=>{
        if(pizza){
            if(pizza._id===match.params.pizzaid){
                setName(pizza.name)
                setDescription(pizza.description)
                setCategory(pizza.category)
                setSmallPrice(pizza.prices[0]['small'])
                setMediumPrice(pizza.prices[0]["medium"])
                setLargePrice(pizza.prices[0]["large"])
                setImage(pizza.image)
            }
            else{
                dispatch(getPizzaById(match.params.pizzaid))
            }
            
        }else{
            dispatch(getPizzaById(match.params.pizzaid))
        }
    },[pizza,dispatch])

    const formHandler=(e)=>{
        e.preventDefault();
        const editedpizza={
            _id:match.params.pizzaid,
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
        dispatch(editPizza(editedpizza))
        console.log(pizza)       
    }
    return (
        <div className="container">
            <h1>Edit Pizza</h1>
            {loading &&(<Loading/>)}
            {error && (<Error error="something went wrong!!"/>)}
            {editsuccess && (<Success success="Pizza details edited successfully!"/>)}
            {editloading && (
               <div className="loading">
               <Loading/>
               </div>
                )}
                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Small Varient Price" value={smallPrice} onChange={(e)=>{setSmallPrice(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Medium Varient Price" value={mediumPrice} onChange={(e)=>{setMediumPrice(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Large Varient Price" value={largePrice} onChange={(e)=>{setLargePrice(e.target.value)}}/>
                    
                    <input className="form-control" type="text" placeholder="Category" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                    <input className="form-control" type="text" placeholder="Image" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
                    <button className="btn edit__pizza__btn" type="submit">Edit Pizza</button>
                </form>

        </div>
    )
}

export default Editpizza
