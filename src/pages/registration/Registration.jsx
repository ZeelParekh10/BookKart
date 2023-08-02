import {React,useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Registration.css";
import { Button } from '@material-ui/core';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const Registration = () => {

  const [formData, setFormData] = useState(initialValues);

  const handleFormSubmit = (values) => {
    console.log(values);
    setFormData(values);
  };


  return (
    <div className='registration'>
      <h3>Personal Information</h3>
      <hr/>
      <p>Please enter the follwing information to create your account.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <div>
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field"
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-field"
            />
          </div>
          <ErrorMessage name="firstName" component="div" className="error-message" />
          <ErrorMessage name="lastName" component="div" className="error-message" />
          <Field
            type="email"
            name="email"
            placeholder="Email Address"
            className="input-field"
          />
          <ErrorMessage name="email" component="div" className="error-message" />

          <h3>Login Information</h3>
          <hr/>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
          />
          <ErrorMessage name="password" component="div" className="error-message" />

          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-field"
          />
          <ErrorMessage name="confirmPassword" component="div" className="error-message" />

          <Button variant="contained" className="register-button" type="submit">Register</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
