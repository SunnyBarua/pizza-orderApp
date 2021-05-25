import React ,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setCpassword]=useState('')

    const registerstate=useSelector(state=>state.registerUserReducer)
    const {error,loading,success}=registerstate
    const dispatch=useDispatch()

    const register=()=>{
        if(password !=cpassword){
            alert("passwords not matched!")
        }else{
            const user={
                name,email,password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
           <div className="row justify-content-center align-items-center mt-5">
               <div className="col-md-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                   {loading && (<div className="loading">
                   <Loading/>
                   </div>)}
                   {success && (<Success success="User Registered Successfully!"/>)}
                   {error && (<Error error="Email alreday registered"/>)}
                   <h2 style={{fontSize:'30px',textAlign:'center'}}>Register</h2>
                   <div>
                       <input required type="text" placeholder="name" className="form-control"
                       value={name}
                       onChange={(e)=>{setName(e.target.value)}}/>
                       <input required  type="email" placeholder="email" className="form-control"
                       value={email}
                       onChange={(e)=>{setEmail(e.target.value)}}
                       />
                       <input required  type="text" placeholder="password" className="form-control"
                       value={password}
                       onChange={(e)=>{setPassword(e.target.value)}}
                       />
                       <input required  type="text" placeholder="confirm password" className="form-control"
                       value={cpassword}
                       onChange={(e)=>{setCpassword(e.target.value)}}
                       />
                       <button onClick={register} className="btn mt-3 mb-2">REGISTER</button>
                       <br/>
                       <Link style={{color:'black'}} to="/login">Click Here To LOGIN</Link>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Register
