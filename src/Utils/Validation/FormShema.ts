import { object, ref, string, boolean, date, number, SchemaOf } from 'yup';
import { IAddItems } from "../../@type/vaildation"
const FormSchema = (): SchemaOf<IAddItems> => {
  return object().shape({
    currentlyWork: boolean(),
    jobTitle: string().required(" Select job title"),
    jobField: string().required(" Select job Field"),
    jobLocation: string().required(" Select job Location"),
    companyName: string().required("Enter Company Name"),
    companyIndustry: string().required(" Select Company Inustry"),
    companySize: string().required(" Select Company Size"),
    companySector: string().required(" Select Company Sectore"),
    companyAddress: string().required(" Enter Company Address"),
    description: string().required(" Select job Description"),
    startDate: date().required(" Enter Start Date"),
    endDate:  date().when("currentlyWork", {
            is: (currentlyWork=>{
                return !currentlyWork? true : false;
            }), then: date()
                .min(ref('startDate'), "End date can't be before start date")
                .required("Please Enter End Date")
        }),
    reasonOfLeaving: string().when("currentlyWork", {
      is: true,
      then: string(),
      otherwise: string().required(" Enter Reason Of Leaving "),
    }),
    numberEmployees: number()
      .typeError("Should be Number")
      .integer()
      .min(0, "Please Enter more than one")
      .required("Please Enter Number Of Supervise by you"),
  });
};

export default FormSchema;
