import React from 'react';
 import { Form, Formik} from 'formik';
 import {prodregSchema} from './schemas';
 import CustomInput from './questions/CustomInput';
 import './Form.css'
 
 const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
}


 const ProdregForm = () => {

  const initialValues = {
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
  }

  return (
    <>
    <h2>Register your Bike</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={prodregSchema}
      onSubmit={onSubmit}
    >
      {props => (
         <Form>
           <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.fname}
             name="fname"
             placeholder='First Name'
           />
           {props.errors.fname && <div className='error'>{props.errors.fname}</div>}
           <CustomInput name="lname" placeholder="Last Name"/>
           <CustomInput name="city" placeholder="City"/>
           <button type="submit">Submit</button>
         </Form>
       )}

    </Formik>
    </>
  )
    
 };

 export default ProdregForm;