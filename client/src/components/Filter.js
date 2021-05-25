import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterPizzas } from '../actions/pizzaActions'

const Filter = () => {
    const dispatch=useDispatch()
    const [searchKey,setSearchKey]=useState('')
    const [category,setCategory]=useState('all')
    return (
        <div>
            <div className="filter_input">
                <div className="w-100">
                    <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}
                    type="text" className="form-control" placeholder="search pizzas"/>

                </div>
                <div className="w-100">
                    <select className=" filter__select" value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non Veg</option>
                    </select>
                    
                </div>
                <div className="w-100">
                    <button className="btn" onClick={()=>dispatch(filterPizzas(searchKey,category))}>FILTER</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
