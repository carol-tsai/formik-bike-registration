import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={field.value || null}
      placeholderText="Date of Purchase"
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default Date;