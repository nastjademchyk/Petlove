import { Field, Formik, Form as FormikForm } from 'formik';
import s from './LoginPage.module.css';
import dog1 from '../../assets/images/web/dogLogin/dog-login-web-x1.png';
import dog2 from '../../assets/images/web/dogLogin/dog-login-web-x2.png';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <div className={s.imageWrapper}>
          <img
            src={dog1}
            alt="dog"
            srcSet={`${dog1} 1x, ${dog2} 2x`}
            className={s.image}
          />
        </div>
      </div>
      <div className={s.right}>
        <div className={s.registration}>
          <h2 className={s.header}>Log in</h2>
          <p className={s.text}>
            Welcome! Please enter your credentials to login to the platform:{' '}
          </p>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <FormikForm className={s.form}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={s.item}
              ></Field>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={s.item}
              ></Field>
              <button type="submit" className={s.btn}>
                Log In
              </button>
            </FormikForm>
          </Formik>

          <p className={s.additional}>
            Don’t have an account?
            <NavLink to="/register" className={s.span}>
              {' '}
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
