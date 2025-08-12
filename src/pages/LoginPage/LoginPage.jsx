import { Field, Formik, Form as FormikForm } from 'formik';
import s from './LoginPage.module.css';
import dog1 from '../../assets/images/web/dogLogin/dog-login-web-x1.png';
import dog2 from '../../assets/images/web/dogLogin/dog-login-web-x2.png';
import { NavLink, useNavigate } from 'react-router-dom';
import dogImage from '../../assets/images/dog.png';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signing } from '../../redux/auth/operations';
import { useState } from 'react';
import sprite from '../../assets/icons.svg';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const resultAction = await dispatch(signing(values));

      if (signing.fulfilled.match(resultAction)) {
        navigate('/profile');
      } else {
        const errorMessage =
          resultAction.payload || 'Invalid email or password';
        alert(errorMessage);
      }
    } catch (err) {
      console.error('Unexpected login error:', err);
      alert('Something went wrong. Please try again later.');
    }

    resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid Email')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <div className={s.imageWrapper}>
          <div className={s.box}>
            <div className={s.left_small}>
              <div className={s.imgCover}>
                <img src={dogImage} alt="cat" className={s.img} />
              </div>
            </div>
            <div className={s.right_small}>
              <div className={s.header_box}>
                <p className={s.cat_name}>Rich</p>
                <p className={s.birthday}>
                  Birthday: <span className={s.accent}>21.09.2020</span>
                </p>
              </div>
              <div className={s.cat_description}>
                Rich would be the perfect addition to an active family that
                loves to play and go on walks. I bet he would love having a
                doggy playmate too!
              </div>
            </div>
          </div>
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

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <FormikForm className={s.form}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={s.item}
              ></Field>
              <div className={s.passwordWrapper}>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className={s.item}
                />
                <button
                  type="button"
                  className={s.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <svg className={s.icon}>
                    <use
                      href={`${sprite}#icon-${
                        showPassword ? 'eye-open' : 'eye-off'
                      }`}
                    />
                  </svg>
                </button>
              </div>
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
