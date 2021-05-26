import axios from "axios"
import { GET_USERS_FAILED, GET_USERS_REQUEST, GET_USERS_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"

export const registerUser=(user)=>async dispatch=>{
    dispatch({type:USER_REGISTER_REQUEST})
    try{
        const response= await axios.post('/users/register',user)
        dispatch({type:USER_REGISTER_SUCCESS,payload:response.data})
        window.location.href="/login"

    }catch(error){
        dispatch({
            type:USER_REGISTER_FAILED,payload:error
        })
    }
}

export const loginUser=(user)=>async dispatch=>{
    dispatch({type:USER_LOGIN_REQUEST})
    try{
        const response= await axios.post('/users/login',user)
        dispatch({type:USER_LOGIN_SUCCESS,payload:response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href="/"

    }catch(error){
        dispatch({type:USER_LOGIN_FAILED,payload:error})
    }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href="/login"
}
export const getAllUsers=()=>async dispatch=>{
    dispatch({
        type:GET_USERS_REQUEST
    })
    try {
        const {data} =await axios.get('/users/getallusers')
        
        dispatch({
            type:GET_USERS_SUCCESS , 
            payload : data
        })     
    } catch (error) {
        dispatch({
            type:GET_USERS_FAILED , 
            payload : error
        })
    }
}

export const deleteUser=(userid)=>async dispatch=>{
    try{
        await axios.post("/users/deleteuser",{userid})
        alert("User deleted successfully!")
        window.location.reload()

    }catch(error){
        alert("Someting went wrong")

    }
}