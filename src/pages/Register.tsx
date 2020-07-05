import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Register = () => {
  return (
    <main>
      <div className='section form-section'>
        <form>
          <h1>Sign up</h1>
          <fieldset>
            <label>Name</label>
            <input type="text"/>
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input type="text"/>
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input type="text"/>
          </fieldset>
          <button type="submit">Sign up</button>
          <Link to='/'>
            Sign in now <BsArrowRight />
          </Link>
        </form>
      </div>
      <div className='section background-section' />
    </main>
  );
}

export default Register;