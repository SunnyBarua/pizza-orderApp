import React, { useEffect } from 'react'
import Pizza from '../components/Pizza'

import {useDispatch,useSelector} from 
"react-redux"
import {getAllPizzas} from "../actions/pizzaActions"
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
const Home = () => {
    const dispatch=useDispatch();
    const pizzasstate=useSelector(state=>state.getAllPizzasReducer);
    const {pizzas,error,loading}=pizzasstate;
    console.log(pizzas);
    useEffect(()=>{
        dispatch(getAllPizzas())
    },[])
    return (
        <>
        <div className="filter shadow-lg p-3 mb-5 bg-white rounded">
        <Filter/>
        </div>
        <div className="container loader">
            
            <div className="menu_row">

                
                {loading ?(<div className="loading__home">
                   <Loading/>
                   </div>):error ?(<Error error="Something went wrong!"/>):
                
                    (
                     pizzas?.map(pizza=>(
                        <Pizza pizza={pizza}/>
                    ))
                     
                )
               
                }
            </div>
    </div>
        </>
    )
}

export default Home
