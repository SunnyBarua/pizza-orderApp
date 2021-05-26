import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {deletePizza, getAllPizzas} from "../actions/pizzaActions"
import Error from '../components/Error';
import Loading from '../components/Loading';

const Pizzaslist = () => {
    const dispatch=useDispatch()
    const pizzasstate=useSelector((state)=>state.getAllPizzasReducer);
    const {pizzas,error,loading}=pizzasstate;
   
    useEffect(()=>{
        dispatch(getAllPizzas())
    },[])

    return (
        <div className="container">
            <h2 style={{fontSize:"35px"}}>Pizzas List</h2>
            {loading && (<Loading/>)}
            {error &&(<Error error="Something went wrong!"/>)}
            <table className="table table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {pizzas && pizzas.map(pizza=>{
                    return <tr>
                        <td>{pizza.name}</td>
                        <td>
                            Small: {pizza.prices[0]['small']}<br/>
                            Medium: {pizza.prices[0]['medium']}<br/>
                            Large: {pizza.prices[0]['large']}
                        </td>
                        <td>{pizza.category}</td>
                       <td>
                       <i className="fas fa-trash" onClick={()=>dispatch(deletePizza(pizza._id))}></i>
                       <Link to={`/admin/editpizza/${pizza._id}`}><i className="fas fa-edit"></i></Link>
                       </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Pizzaslist
