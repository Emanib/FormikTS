import { Field } from "formik";

interface ISelect {
  label: string;
  value: string;
}
interface OtherProps {
  options: Array<ISelect>,
  name: string,
  placeholder: string,

  as: Function
}
interface IProps {
  field: { name: string, onBlur:Function, value: string },
  form: {
    setFieldValue: (name: string, value: string) => {}, errors: {},
    setFieldTouched: Function, touched: {}
  },
};
const workExperienceSelect = (props: OtherProps) => {
  const { options, name, placeholder } = props;

  return (
    <Field>
      {({
        field: { onBlur, value },
        form: { setFieldValue, errors, setFieldTouched, touched },
      }: IProps) => (
        <>
          {props.as({
            value,
            onBlur,
            setFieldValue,
            setFieldTouched,
            options,
            touched,
            name,
            placeholder,
            errors
          })}
          {errors[name] && touched[name] && (
            <div className={"error"}>{errors[name]}</div>
          )}
        </>
      )}
    </Field>
  );
};

export default workExperienceSelect;
