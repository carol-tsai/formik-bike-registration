import React from 'react';
 import { Form, Formik} from 'formik';
 import {prodregSchema} from './schemas';
 import CustomInput from './questions/CustomInput';
 import State from './questions/State'
 import Checkbox from './questions/Checkbox';
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
    email: "",
    brand: "Fuji",
    model: "",
    size: "",
    store: "",
    serialNo: "",
    dateOfPurchase: "",
    price: "",
    newsletter: true,
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
           <CustomInput name="fname" placeholder="First name"/>
           <CustomInput name="lname" placeholder="Last Name"/>
           <CustomInput name="city" placeholder="City"/>
           <CustomInput name="zip" placeholder="Zip Code"/>
           <State name="state" placeholder="Select a State"/>
           <CustomInput name="email" placeholder="Email"/>
           <Checkbox type="checkbox" name="newsletter" label="Sign up for our newsletter"/>
           <button type="submit">Submit</button>
         </Form>
       )}

    </Formik>
    </>
  )
    
 };

 export default ProdregForm;