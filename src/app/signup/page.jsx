"use client";

import Input from "@/components/Input";
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const page = () => {
  const schema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .required("Required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid Email"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
  });

  const initialValues = {
    name: null,
    email: null,
    password: null,
    confirmPassword: null
  };

  const onSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {(formik) => {
        return (
          <Form className="flex flex-col w-96 space-y-4 mx-auto pt-10">
            {/* name */}
            <Input 
                title="Name" 
                name="name" 
                value={formik.values.name}
                errorMessage={formik.touched.name && formik.errors.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            {/* email */}
            <Input 
                title="Email" 
                name="email" 
                value={formik.values.email}
                errorMessage={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}

            />
            {/* password */}
            <Input
                title="Password" 
                type="password"
                name="password" 
                value={formik.values.password}
                errorMessage={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange}
            />
            {/* confirm password */}
            <Input
                title="Confirm Password" 
                type="password"
                name="confirmPassword" 
                value={formik.values.confirmPassword}
                errorMessage={formik.touched.confirmPassword && formik.errors.confirmPassword}
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange}

            />
            <button className="btn btn-secondary">Sign up</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default page;
