import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import './auth.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string().required('The passoword is required.'),
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <div className="wrapper">
          <div className="form-wrapper">
            <h3 noMargin size="h1" color="white">
              Login into your account
            </h3>
            <h8 bold size="h4" color="white">
              Fill in your details to login into your account
            </h8>
            <div>
              <Field
                className="email"
                type="email"
                name="email"
                placeholder="Your email..."
              />
              <Field
                className="password"
                type="password"
                name="password"
                placeholder="Your password..."
              />
              <div className="logIntoAccount">
                <button disabled={!isValid} type="submit">
                  Login
                </button>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;