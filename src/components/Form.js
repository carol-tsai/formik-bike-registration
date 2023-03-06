import React from 'react';
 import { useFormik } from 'formik';
 import '../styles/Formik.css'
 import {prodregSchema} from './schemasschemas';
 
 const Form = () => {
   const {values, handleBlur,handleChange,handleSubmit, touched, errors} = useFormik({
     initialValues: {
      fname: "",
      lname: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      email: "",
      brand: "Fuji",
      model: "",
      size: "",
      store: "",
      serialNo: "",
      dateOfPurchase: "",
      price: "",
      newsletter: "yes",
      phone: "",
      sms: "yes"
     },
     validationSchema: prodregSchema,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={handleSubmit} autoComplete="off">
       <label htmlFor="fname">First Name</label>
       <input
         id="fname"
         name="fname"
         type="text"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.fname}
       />
       {touched.fname && errors.fname ? (
         <div>{errors.fname}</div>
       ) : null}
 
       <label htmlFor="lname">Last Name</label>
       <input
         id="lname"
         name="lname"
         type="text"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.lname}
       />
       {touched.lname && errors.lname ? (
         <div>{errors.lname}</div>
       ) : null}
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.email}
       />
       {touched.email && errors.email ? (
         <div>{errors.email}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default Form;