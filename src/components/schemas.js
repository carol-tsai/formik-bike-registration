
import * as yup from "yup";

const zipRegex = /^\d{5}(-\d{4})?$/;
const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}/;

export const prodregSchema = yup.object().shape({
  fname: yup.string().max(20, "charater limit 20").required("First Name is required"),
  lname: yup.string().max(20, "charater limit 20").required("Last Name is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zip: yup.string().matches(zipRegex,{message: "Not a valid zip code"}).required("Zip code is required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup.string().matches(phoneRegex,{ message: "Not a valid zip code" }),
  model: yup.string().required("Model is required"),
  size: yup.string().required("Size is required"),
  store: yup.string().required("Store is required"),
  serialNo: yup.string().min(8).required("Retailer purchased from is required"),
  dateOfPurchase: yup.string().required("Date of purchase is required")
});