import { Field } from "formik";
interface IProps {
  name: string,
  placeholder: string,
  errors: {},
  touched: {},
  component: Function,
  className: string,
}
const DateFormik = ({
  name,
  placeholder,
  errors,
  touched,
  component,
  className,
}: IProps) => {
  return (
    <div>
      <Field
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

export default DateFormik;
