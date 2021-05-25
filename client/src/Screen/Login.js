import React ,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'


const  Login= () => {
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const loginstate=useSelector(state=>state.loginUserReducer)
    const {loading,error}=loginstate
    
    const dispatch=useDispatch()

    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href="/"
        }

    },[])

    const login=()=>{
        const user={
            email,password
        }
        console.log(user)
        dispatch(loginUser(user))
    }
    return (
        <div>
           <div className="row justify-content-center align-items-center mt-5">
               <div className="col-md-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                   <h2 style={{fontSize:'30px',textAlign:'center'}}>Login</h2>

                   {loading && (<div className="loading">
                   <Loading/>
                   </div>)}
                   {error && (<Error error="Invalid Credentials"/>)}
                   <div>
                    
                       <input required  type="email" placeholder="email" className="form-control"
                       value={email}
                       onChange={(e)=>{setEmail(e.target.value)}}
                       />
                       <input required  type="text" placeholder="password" className="form-control"
                       value={password}
                       onChange={(e)=>{setPassword(e.target.value)}}
                       />
                       <button onClick={login} className="btn mt-3 mb-2">LOGIN</button>
                       <br/>
                       <Link style={{color:'black'}} to="/register">Click Here To Register</Link>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Login
