import axios from "axios"
import { ADD_PIZZA_FAILED, ADD_PIZZA_REUEST, ADD_PIZZA_SUCCESS, EDIT_PIZZA_FAILED, EDIT_PIZZA_REQUEST, EDIT_PIZZA_SUCCESS, GET_PIZZABYID_FAILED, GET_PIZZABYID_REQUEST, GET_PIZZABYID_SUCCESS, GET_PIZZAS_FAILED, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS } from "../constants/pizzaConstants";

export const getAllPizzas=()=>async dispatch=>{
    dispatch({
        type:GET_PIZZAS_REQUEST
    })
    try {
        const {data} =await axios.get('/pizzas/getallpizzas')
        
        dispatch({
            type:GET_PIZZAS_SUCCESS , 
            payload : data
        })     
    } catch (error) {
        dispatch({
            type:GET_PIZZAS_FAILED , 
            payload : error
        })
    }
}

export const getPizzaById=(pizzaid)=>async dispatch=>{
    dispatch({
        type:GET_PIZZABYID_REQUEST
    })
    try {
        const {data} =await axios.post('/pizzas/getpizzabyid',{pizzaid})
        
        dispatch({
            type:GET_PIZZABYID_SUCCESS , 
            payload : data,
        })     
    } catch (error) {
        dispatch({
            type:GET_PIZZABYID_FAILED , 
            payload : error
        })
    }
}


export const filterPizzas=(searchKey,category)=>async (dispatch)=>{ 
    var filteredPizzas;
    dispatch({type:GET_PIZZAS_REQUEST})
    try{
        const response=await axios.get('/pizzas/getallpizzas')
        filteredPizzas=response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchKey))

        if(category !='all'){
            filteredPizzas=response.data.filter(pizza=>pizza.category.toLowerCase()==category)
        }
        dispatch({type:GET_PIZZAS_SUCCESS,payload:filteredPizzas})
    }catch(error){
        dispatch({type:GET_PIZZAS_FAILED,payload:error})

    }
}


export const addPizza=(pizza)=>async dispatch=>{
    dispatch({
        type:ADD_PIZZA_REUEST
    })
    try{
        const {data}=await axios.post('/pizzas/addpizza',{pizza})
        dispatch({
            type:ADD_PIZZA_SUCCESS
        })
    }catch(error){
        dispatch({
            type:ADD_PIZZA_FAILED,
            payload:error
        })
    }
}

export const editPizza=(editedpizza)=>async dispatch=>{
    dispatch({
        type:EDIT_PIZZA_REQUEST
    })
    try{
        const {data}=await axios.post('/pizzas/editpizza',{editedpizza})
        dispatch({
            type:EDIT_PIZZA_SUCCESS
            
        })
        window.location.href="/admin/pizzaslist"
    }catch(error){
        dispatch({
            type:EDIT_PIZZA_FAILED,
            payload:error
        })
    }
}

export const deletePizza=(pizzaid)=>async dispatch=>{
    try{
        const response=await axios.post("/pizzas/deletepizza",{pizzaid})
        alert("Pizza deleted successfully!")
        window.location.reload()

    }catch(error){
        alert("Something went wrong!!")
        console.log(error)

    }
}