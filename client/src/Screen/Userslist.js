import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'

const Userslist = () => {
    const dispatch=useDispatch()
    const usersstate=useSelector(state=>state.getAllUsersReducer)
    const {error,loading,users}=usersstate
    useEffect(()=>{
        dispatch(getAllUsers())

    },[])
    return (
        <div className="container">
            <h1 style={{textAlign:'center'}}>Userslist</h1>
            {loading && (<Loading/>)}
            {error && (<Error error="something went wrong!"/>)}
            <table className="table table-striped table-bordered">
                <thead className="thead">
                    <tr>
                        <th>
                            User Id
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i className="fas fa-trash" onClick={()=>dispatch(deleteUser(user._id))}></i></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Userslist
