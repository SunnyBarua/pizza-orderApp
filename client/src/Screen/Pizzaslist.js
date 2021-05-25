import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 
"react-redux"
import { getAllPizzas } from '../actions/pizzaActions';

const Pizzaslist = () => {
    const dispatch=useDispatch();
    const pizzasstate=useSelector(state=>state.getAllPizzasReducer);
    const {pizzas,error,loading}=pizzasstate;
    console.log(pizzas);
    useEffect(()=>{
        dispatch(getAllPizzas())
    },[])
    return (
        <div>
            pizzaslist
        </div>
    )
}

export default Pizzaslist
