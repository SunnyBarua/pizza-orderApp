import { GET_PIZZAS_FAILED, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS } from "../constants/pizzaConstants"

export const getAllPizzasReducer=(state={pizzas:[]},action)=>{
    switch(action.type){
        case GET_PIZZAS_REQUEST:
            return{
                loading:true,
                ...state
            }
        case GET_PIZZAS_SUCCESS:
            return{
                loading:false,
                pizzas:action.payload
            }
        case GET_PIZZAS_FAILED:
            return{
                error:action.payload,
                loading:false
            }
        default:
            return state
    }

}

