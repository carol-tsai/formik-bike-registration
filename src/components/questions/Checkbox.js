
import { useField } from "formik";

const Checkbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>{label}</span>
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default Checkbox;