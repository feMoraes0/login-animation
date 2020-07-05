import React from 'react';

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
          <button type='button'>Register now</button>
        </form>
      </div>
    </main>
  );
}

export default Login;