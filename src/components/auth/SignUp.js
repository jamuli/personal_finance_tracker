import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import * as actions from '../../store/actions';

import './auth.css';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Your first name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  lastName: Yup.string()
    .required('Your last name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string().required('The passoword is required.').min(8, 'The password is too short.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

const SignUp = ({ signUp, loading, error, cleanUp }) => {

  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit= { async (values, { setSubmitting }) => {
        
        await signUp(values)
          .then((res) => console.log(res.values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <div className="wrapper">
          <div className="form-wrapper">
            <h3>
              Sign up for an account
            </h3>
            <h8 bold size="h4" color="white">
              Fill in your details to register your new account
            </h8>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <Field
                className="field"
                type="email"
                name="email"
                placeholder="Your email..."
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <Field
                className="field"
                type="password"
                name="password"
                placeholder="Your password..."
              />
            </div>
            <div className="password">
              <label htmlFor="password">Confirm Password</label>
              <Field
                className="field"
                type="password"
                name="confirmPassword"
                placeholder="Re-type your password..."
              />
            </div>
            <div className="createAccount">
              <button 
                disabled={!isValid || isSubmitting}
                loading={loading ? 'Signing up...' : null}
                type="submit">Create Account
              </button>
              <Nav.Link as={Link} to="/signin">Already Have an Account?</Nav.Link>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  signUp: actions.signUp
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
