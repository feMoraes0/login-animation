import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { registerSectionVariants, formVariants, fieldsetRegisterVariants } from '../utils/variants';

const Register = () => {
  return (
    <main>
      <motion.div
        className='section form-section'
        variants={registerSectionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.form
          variants={formVariants}
        >
          <motion.h1
            variants={fieldsetRegisterVariants}
          >
            Sign up
          </motion.h1>
          <motion.fieldset
            variants={fieldsetRegisterVariants}
          >
            <label>Name</label>
            <input type="text"/>
          </motion.fieldset>
          <motion.fieldset
            variants={fieldsetRegisterVariants}
          >
            <label>Email</label>
            <input type="text"/>
          </motion.fieldset>
          <motion.fieldset
            variants={fieldsetRegisterVariants}
          >
            <label>Password</label>
            <input type="text"/>
          </motion.fieldset>
          <motion.button
            variants={fieldsetRegisterVariants}
            type="submit"
          >
            Sign up
          </motion.button>
          <motion.span
            variants={fieldsetRegisterVariants}
            className='redirect-register'
          >
            <Link to='/'>
              Sign in now <BsArrowRight />
            </Link>
          </motion.span>
        </motion.form>
      </motion.div>
      <div className='section background-section' />
    </main>
  );
}

export default Register;