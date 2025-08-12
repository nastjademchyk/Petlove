import EditUserBtn from '../EditUserBtn/EditUserBtn';
import s from './UserBlock.module.css';
import sprite from '../../assets/icons.svg';
import { Field, Formik, Form as FormikForm } from 'formik';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const UserBlock = () => {
  const { name, email } = useSelector(selectUser);

  return (
    <>
      <div className={s.top}>
        <div className={s.user}>
          <p className={s.userName}>User</p>

          <svg className={s.icon}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        </div>
        <div className={s.big_user_main}>
          <div className={s.big_user}>
            <svg className={s.icon_big}>
              <use href={`${sprite}#icon-user`} />
            </svg>
          </div>
          <p className={s.upload}>Upload photo</p>
        </div>
        <EditUserBtn />
      </div>
      <div className={s.personal_info}>
        <h3 className={s.info_header}>My information</h3>
        <Formik>
          <FormikForm className={s.form}>
            <Field
              type="text"
              name="name"
              placeholder={name}
              className={s.item}
            ></Field>
            <Field
              type="email"
              name="email"
              placeholder={email}
              className={s.item}
            ></Field>
            <Field
              type="phone"
              name="phone"
              placeholder="+380 "
              className={s.item}
            ></Field>
          </FormikForm>
        </Formik>
      </div>
    </>
  );
};
export default UserBlock;
