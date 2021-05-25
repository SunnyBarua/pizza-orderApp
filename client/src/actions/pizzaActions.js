import axios from "axios"
import { GET_PIZZAS_FAILED, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS } from "../constants/pizzaConstants";

export const getAllPizzas=()=>async dispatch=>{
    dispatch({
        type:GET_PIZZAS_REQUEST
    })
    try {
        const response = await axios.get('pizzas/getallpizzas')
        console.log(response);
        dispatch({
            type:GET_PIZZAS_SUCCESS , 
            payload : response.data
        })     
    } catch (error) {
        dispatch({
            type:GET_PIZZAS_FAILED , 
            payload : error
        })
    }
}

export const filterPizzas=(searchKey,category)=>async (dispatch)=>{ 
    var filteredPizzas;
    dispatch({type:GET_PIZZAS_REQUEST})
    try{
        const response=await axios.get('pizzas/getallpizzas')
        filteredPizzas=response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchKey))

        if(category !='all'){
            filteredPizzas=response.data.filter(pizza=>pizza.category.toLowerCase()==category)
        }
        dispatch({type:GET_PIZZAS_SUCCESS,payload:filteredPizzas})
    }catch(error){
        dispatch({type:GET_PIZZAS_FAILED,payload:error})

    }
}

