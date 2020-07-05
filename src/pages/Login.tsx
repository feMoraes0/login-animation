import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loginSectionVariants, formVariants, fieldsetLoginVariants } from '../utils/variants';



const Login = () => {
  return (
    <main>
      <div className='section background-section' />
      <motion.div
        className='section form-section'
        variants={loginSectionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.form
          variants={formVariants}
        >
          <motion.h1
            variants={fieldsetLoginVariants}
          >
            Sign in
          </motion.h1>
          <motion.fieldset
            variants={fieldsetLoginVariants}
          >
            <label>Email</label>
            <input type="text"/>
          </motion.fieldset>
          <motion.fieldset
            variants={fieldsetLoginVariants}
          >
            <label>Password</label>
            <input type="text"/>
          </motion.fieldset>
          <motion.button
            variants={fieldsetLoginVariants}
            type="submit"
          >
            Sign in
          </motion.button>
          <motion.span
            variants={fieldsetLoginVariants}
          >
            <Link to='/register'>
              <BsArrowLeft /> Sign up now
            </Link>
          </motion.span>
        </motion.form>
      </motion.div>
    </main>
  );
}

export default Login;