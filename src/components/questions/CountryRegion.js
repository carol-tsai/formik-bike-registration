import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useField } from "formik";

function CountryRegion({ country,...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
        <RegionDropdown 
          disableWhenEmpty={true} 
          country={country}
          defaultOptionLabel="Select State"
          {...field} />
        <CountryDropdown 
          disabled={true}
          value={country} 
          />
          {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  )
}

export default CountryRegion;