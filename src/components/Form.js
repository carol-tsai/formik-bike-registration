import React from 'react';
 import { useFormik } from 'formik';
 import {prodregSchema} from './schemas';
 import './Form.css'
 

 const Form = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  }

   const {values, touched, errors, isSubmitting, handleBlur,handleChange,handleSubmit} = useFormik({
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
     handleSubmit: async (values, actions) => {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    }
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
         <div className='error'>{errors.fname}</div>
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
         <div className='error'>{errors.lname}</div>
       ) : null}

      <label htmlFor="city">City</label>
       <input
         id="city"
         name="city"
         type="text"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.city}
       />
       {touched.city && errors.city ? (
         <div className='error'>{errors.city}</div>
       ) : null}

      <label htmlFor="state">State</label>
       <input
         id="state"
         name="state"
         type="text"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.state}
       />
       {touched.state && errors.state ? (
         <div className='error'>{errors.state}</div>
       ) : null}

      <label htmlFor="zip">Zip Code</label>
       <input
         id="zip"
         name="zip"
         type="text"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.zip}
       />
       {touched.zip && errors.zip ? (
         <div className='error'>{errors.zip}</div>
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
         <div className='error'>{errors.email}</div>
       ) : null}
 
       <button disabled={isSubmitting} type="submit">Submit</button>
     </form>
   );
 };

 export default Form;