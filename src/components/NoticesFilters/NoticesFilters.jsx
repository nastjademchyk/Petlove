import { Form as FormikForm, Formik, Field } from 'formik';
import SearchField from '../SearchField/SearchField';
import s from './NoticesFilters.module.css';
const NoticesFilters = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <Formik>
          <FormikForm className={s.form}>
            {/* <SearchField /> */}
            <Field as="select" name="category" className={s.field}></Field>
            <Field as="select" name="gender" className={s.field}></Field>
            <Field as="select" name="type" className={s.field}></Field>
            <Field
              className={s.field}
              type="text"
              name="location"
              placeholder="Location"
            ></Field>
          </FormikForm>
        </Formik>
      </div>
      <div className={s.stroke}></div>
      <div className={s.bottom}>
        <ul className={s.list}>
          <li className={s.item}>Popular</li>
          <li className={s.item}>Unpopular</li>
          <li className={s.item}>Cheap</li>
          <li className={s.item}>Expensive</li>
        </ul>
      </div>
    </div>
  );
};

export default NoticesFilters;
