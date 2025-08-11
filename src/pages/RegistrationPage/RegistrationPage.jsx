import s from './RegistrationPage.module.css';
import cat1 from '../../assets/images/web/cat/cat-web-x1.png';
import cat2 from '../../assets/images/web/cat/cat-web-x2.png';
import { Field, Formik, Form as FormikForm } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const RegistrationPage = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Enter a valid Email'
      )
      .required('Email is required'),
    password: Yup.string()
      .min(7, 'Password must be at least 7 characters')
      .required('Password is required'),
  });

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <div className={s.imageWrapper}>
          <img
            src={cat1}
            alt="cat"
            srcSet={`${cat1} 1x, ${cat2} 2x`}
            className={s.image}
          />
        </div>
      </div>
      <div className={s.right}>
        <div className={s.registration}>
          <h2 className={s.header}>Registration</h2>
          <p className={s.text}>
            Thank you for your interest in our platform.{' '}
          </p>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
          >
            <FormikForm className={s.form}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={s.item}
              ></Field>
              <ErrorMessage name="name" component="span" className={s.error} />
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={s.item}
              ></Field>
              <ErrorMessage name="email" component="span" className={s.error} />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={s.item}
              ></Field>
              <ErrorMessage
                name="password"
                component="span"
                className={s.error}
              />
              <Field
                type="password"
                name="confirmpassword"
                placeholder="Confirm password"
                className={s.item}
              ></Field>
              <ErrorMessage
                name="confirmpassword"
                component="span"
                className={s.error}
              />
              <button type="submit" className={s.btn}>
                Registration
              </button>
            </FormikForm>
          </Formik>

          <p className={s.additional}>
            Already have an account?
            <NavLink to="/login" className={s.span}>
              {' '}
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
