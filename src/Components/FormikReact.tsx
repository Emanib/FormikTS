import { Formik } from "formik";
import WorkForm from "./workForm";
import { useDispatch, useSelector } from "react-redux";
import { State } from '../Redux/store'
import { FormSchema,} from "../Utils/Validation";
import { addItem, EditItem } from "../Redux/List/action";
import { FormValues } from "../@type/type"
interface Iprops {
  isEditing: boolean
  setIsEditing: Function
}
const FormikReact = (props: Iprops) => {
  const { list: { isUpdating } } = useSelector((state: State): State => state);
  const dispatch = useDispatch();
  const initialValues: FormValues = {
    jobTitle: "",
    jobField: "",
    jobLocation: "",
    startDate: "",
    endDate: "",
    description: "",
    companyName: "",
    companyAddress: "",
    currentlyWork: false,
    companyIndustry: "",
    companySize: "",
    companySector: "",
    reasonOfLeaving: "",
    numberEmployees: "",
    id: "",
  }
  return (
      <Formik
      >
        {() => (
          <>
            <Formik
              initialValues={initialValues}
              onSubmit={(values: FormValues, actions) => {
                if (isUpdating) {
                  dispatch(EditItem(values));
                } else {
                  values.id = `${Math.random() * 10000}`;
                  dispatch(addItem(values));
                }
                actions.setSubmitting(false);
                actions.resetForm({});
              }}
              validationSchema={FormSchema}
              children={formikProps =>
                <WorkForm  {...formikProps}  {...props} />
              }

            />
          </>
        )}
      </Formik>
  );
};

export default FormikReact;
