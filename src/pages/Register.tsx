import React from 'react';

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
          <button type='button'>Sign in now</button>
        </form>
      </div>
      <div className='section background-section' />
    </main>
  );
}

export default Register;