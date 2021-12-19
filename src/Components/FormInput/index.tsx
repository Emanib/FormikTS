import { Field, useField } from "formik";

interface Iprops {
  type?: string,
  name: string,
  placeholder?: string,
  errors: {},
  touched: {},
  label?: string,
  component?: string,
  className: string,
}

function FormInput({
  type,
  name,
  placeholder,
  errors,
  touched,
  label,
  component,
  className,
}: Iprops) {

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={"off"}
        component={component}
        className={className}
      />
      {errors[name] && touched[name] && (
        <div className={"error"}>{errors[name]}</div>
      )}
    </div>
  );
};

export default FormInput;
