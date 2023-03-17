import React from 'react'
import { loginEndpoint } from '../../spotify'
import './login.css'

export default function Login() {
  return (
    <div className='login-page'>
      <img src="https://www.doolinns.com/wp-content/uploads/2019/06/login-logo-png-6.png" alt='logo of login' className='logo'/>
      <a href= {loginEndpoint}>
        <div className='login-btn'>Login</div>
      </a>
    </div>
  )
}
