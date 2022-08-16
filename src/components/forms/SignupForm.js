import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('تکایە ئیمەیلی درووست داخڵبکە')
        .required('Required'),
    }),
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
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      {formik.errors.username ? (
        <p className="text-red-500"> {formik.errors.username}</p>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="text-red-500"> {formik.errors.email}</p>
      ) : null}

      <button
        type="submit"
        className="bg-indigo-500 text-white rounded-sm shadow-sm p-2 "
      >
        Submit
      </button>
    </form>
  );
}
