import { Form as FormikForm, Formik, Field } from 'formik';
import s from './SearchField.module.css';
const SearchField = () => {
  return (
    <Formik>
      <FormikForm>
        <Field
          className={s.search}
          type="text"
          name="search"
          placeholder="Search"
        ></Field>
      </FormikForm>
    </Formik>
  );
};

export default SearchField;
