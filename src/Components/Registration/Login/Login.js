import React from 'react'
import './Login.css'
import 'remixicon/fonts/remixicon.css'
import { Link, useSearchParams } from 'react-router-dom'

const Login = () => {
    
  return (
    <div className='login-page'>
        <div className='login-header'>
        <h1>Welcome Back</h1>
        <p>Sign in to access your WealthWisdom account</p>
        </div>
        <form>
            <div className='login-field'>
                <label htmlFor='login-username'>Email Address</label>
                <div className='login-username'>
                    <i className='ri-user-line'></i>
                    <input type='text' id='login-username' placeholder='Enter your email address' />
                </div>
            </div>
            <div className='login-field'>
                <div className='login-forget'>
                    <label htmlFor='login-password'>Password</label>
                    <p><Link href='/forgot-password'>Forget Password?</Link></p>
                </div>
                <div className='login-password'>
                    <i className='ri-lock-line'></i>
                    <input type='password' id='login-password' placeholder='Enter your password' />
                </div>
            </div>
            <button type='submit' className='login-btn'><i class="ri-login-box-line"></i> Sign In</button>
            <hr />
            <p>Or Continue with</p>
            <div className='login-social'>
                <button className='login-social-btn google'><i className='ri-google-line'></i></button>
                <button className='login-social-btn facebook'><i className='ri-facebook-circle-line'></i></button>
                <button className='login-social-btn twitter'><i className='ri-twitter-line'></i></button>
                <button className='login-social-btn linkedin'><i className='ri-linkedin-box-line'></i></button>
            </div>
        </form>
        <div className='login-footer'>
            <p>Don't have an account?</p><Link to='/signup'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Login
