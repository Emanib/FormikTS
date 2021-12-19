import { useState, ChangeEvent } from "react";
interface Iprops {
  placeholder: string,
  field: { name: string, onBlur: Function, value: string },
  form: { setFieldValue: (name: string, value: string) => {} },
};

function Date(props: Iprops) {
  const { field: { name, onBlur, value },
    form: { setFieldValue }, placeholder } = props
  const [isFocus, setFocus] = useState<boolean>(false);
  return (
    <input
      onFocus={() => setFocus(true)}
      value={value && value}
      type={isFocus ? "date" : "text"}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(name, e.target.value)}
      onBlur={onBlur(name)}
      placeholder={placeholder}
    />
  );
};

export default Date;
