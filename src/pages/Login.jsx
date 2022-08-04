import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { loginAuth } from '../redux/slices/auth'
import './_login.scss'
import logo from '../images/youtube-logo-png-31812.png'

export default function Login() {
const dispatch=useDispatch()
const navigate = useNavigate()
const accessToken= useSelector(state=>state.auth.accessToken)
 useEffect(()=>{
   if(accessToken){
      navigate("/")
   }
 })

const handleClick=()=>{
   dispatch(loginAuth())
}



  return (
    <div className='login'>
    <div className='login__container'>
       <h2>Youtube Clone</h2>
       <img
          src={logo}
          alt='logo'
       />
       <button onClick={handleClick}>Login With google</button>
       <p>This Project is made using YOUTUBE DATA API</p>
    </div>
 </div>
  )
}
