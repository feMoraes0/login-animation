import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main>
      <div className='section background-section' />
      <div className='section form-section'>
        <form>
          <h1>Sign in</h1>
          <fieldset>
            <label>Email</label>
            <input type="text"/>
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input type="text"/>
          </fieldset>
          <button type="submit">Sign in</button>
          <Link to='/register'>
            <BsArrowLeft /> Register now
          </Link>
        </form>
      </div>
    </main>
  );
}

export default Login;