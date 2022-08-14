import React from 'react';
import { useFormik } from 'formik';

export default function SignupForm() {
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
    },
    validate,
    onSubmit: (values) => {
      // make a post request

      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        required
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      {formik.errors.username ? <p> you have an error</p> : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button
        type="submit"
        className="bg-indigo-500 text-white rounded-sm shadow-sm p-2 "
      >
        Submit
      </button>
    </form>
  );
}