import React from 'react';
import './Signup.css';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup-page'>
      <div className='signup-header'>
        <h1>Create an Account</h1>
        <p>Join WealthWisdom to manage your finances smarter</p>
      </div>
      <form>
        <div className='signup-field'>
          <label htmlFor='signup-username'>Full Name</label>
          <div className='signup-username'>
            <i className='ri-user-line'></i>
            <input type='text' id='signup-username' placeholder='Enter your full name' />
          </div>
        </div> 
        <div className='signup-field'>
          <label htmlFor='signup-email'>Email Address</label>
          <div className='signup-username'>
            <i className='ri-mail-line'></i>
            <input type='email' id='signup-email' placeholder='Enter your email address' />
          </div>
        </div>
        <div className='signup-field'>
          <label htmlFor='signup-password'>Password</label>
          <div className='signup-password'>
            <i className='ri-lock-line'></i>
            <input type='password' id='signup-password' placeholder='Create a password' />
          </div>
        </div>
        <div className='signup-field'>
          <label htmlFor='signup-confirm-password'>Confirm Password</label>
          <div className='signup-password'>
            <i className='ri-lock-line'></i>
            <input type='password' id='signup-confirm-password' placeholder='Confirm your password' />
          </div>
        </div>
        <button type='submit' className='signup-btn'><i className='ri-user-add-line'></i> Sign Up</button>
        <hr />
        <p>Or Sign Up with</p>
        <div className='signup-social'>
          <button className='signup-social-btn google'><i className='ri-google-line'></i></button>
          <button className='signup-social-btn facebook'><i className='ri-facebook-circle-line'></i></button>
          <button className='signup-social-btn twitter'><i className='ri-twitter-line'></i></button>
          <button className='signup-social-btn linkedin'><i className='ri-linkedin-box-line'></i></button>
        </div>
      </form>
      <div className='signup-footer'>
        <p>Already have an account?</p><Link to='/login'>Sign In</Link>
      </div>
    </div>
  );
};

export default Signup;