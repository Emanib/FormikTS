import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from '../Redux/store'
import SelectComponent from "./ReactSelect/SelectComponent";
import WorkSelect from "./ReactSelect/workSelect";
import Options from "./StaticData/Data";
import { FormikProps, Form } from 'formik';
import { FormValues } from "../@type/type"
import FormInput from "./FormInput";
import Date from "./Date/Date";
import DateFormik from "./Date/DateFormik";

interface OtherProps {
  isEditing: boolean;
  setIsEditing: Function
}
const WorkForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { errors, touched, values, setFieldValue, isEditing, setIsEditing } = props;
  const { list: { ListById ,isUpdating} } = useSelector((state: State): State => state);

  useEffect(() => {
    if (isEditing) {
      const fields = ['jobTitle',
        'jobField',
        'jobLocation',
        'startDate',
        'endDate',
        'description',
        'companyName',
        'companyAddress',
        'currentlyWork',
        'companyIndustry',
        'companySize',
        'companySector',
        'reasonOfLeaving',
        'numberEmployees',
        'id'];
      fields.map(field => setFieldValue(field, ListById[0][field]));
      setIsEditing((isEditing: boolean) => !isEditing)
     
    }
  }, [isEditing]);


  return (
    <Form>
      <h2>Job details</h2>
        <WorkSelect
          as={SelectComponent}
          name="jobTitle"
          options={Options.jobTitle}
          placeholder="Job Title"
        />

        <WorkSelect
          as={SelectComponent}
          name="jobField"
          options={Options.jobField}
          placeholder="Job Field"
        />
        <WorkSelect
          as={SelectComponent}
          name="jobLocation"
          options={Options.jobLocation}
          placeholder="Job Location"
        />
          <DateFormik
            component={Date}
            name={"startDate"}
            placeholder={" enter start Date"}
            touched={touched}
            errors={errors}
            className="date"
          />
          {!values.currentlyWork && (
            <DateFormik
              component={Date}
              name={"endDate"}
              placeholder={" enter end Date"}
              touched={touched}
              errors={errors}
              className="date"
            />
          )}
        
        <FormInput
          type={"checkbox"}
          name={"currentlyWork"}
          touched={touched}
          errors={errors}
          className="checkbox"
          label="Currently Work There"
        />
        <FormInput
          component="textarea"
          name={"description"}
          placeholder={"Description"}
          touched={touched}
          errors={errors}
          className="input"
        />
    
      <h3>Company Details</h3>
    
        <FormInput
          type="input"
          name={"companyName"}
          placeholder={"Company Name"}
          touched={touched}
          className="input"
          errors={errors}
        />
        <FormInput
          type="input"
          name={"companyAddress"}
          placeholder={"Company Address"}
          touched={touched}
          className="input"
          errors={errors}
        />
        <WorkSelect
          as={SelectComponent}
          name="companyIndustry"
          options={Options.companyIndustry}
          placeholder="Company Industry"
        />
        <WorkSelect
          as={SelectComponent}
          name="companySize"
          options={Options.companySize}
          placeholder="company Size"
        />
        <WorkSelect
          as={SelectComponent}
          name="companySector"
          options={Options.companySector}
          placeholder="Company Sector "
        />
        <FormInput
          type="input"
          name={"numberEmployees"}
          placeholder={"# of Employees Superives by You"}
          touched={touched}
          className="input"
          errors={errors}
        />
        {!values.currentlyWork && (
          <FormInput
            type="input"
            name={"reasonOfLeaving"}
            placeholder={"Reason Of Leaving"}
            touched={touched}
            className="input"
            errors={errors}
          />
        )}
     
      <button type= 'submit' >
       {isUpdating?   "UPDATE " :'SAVE & ADD ANOTHER RECORD'}
      </button>
    </Form>
  );
};

export default WorkForm;
