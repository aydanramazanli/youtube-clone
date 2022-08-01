import React from 'react'
import logo from '../images/youtube-logo-png-31812.png'
import './_login.scss'

export default function Login() {
  return (
    <div className='login'>
    <div className='login__container'>
       <h2>Youtube Clone</h2>
       <img
          src={logo}
          alt='logo'
       />
       <button>Login With google</button>
       <p>This Project is made using YOUTUBE DATA API</p>
    </div>
 </div>
  )
}
