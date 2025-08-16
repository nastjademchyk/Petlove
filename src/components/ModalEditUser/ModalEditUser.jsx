import s from './ModalEditUser.module.css';
import sprite from '../../assets/icons.svg';
import { useEffect } from 'react';
import { Field, Formik, Form as FormikForm } from 'formik';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const ModalEditUser = ({ onClose }) => {
  const { name, email } = useSelector(selectUser);
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackDrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={s.backDrop} onClick={handleBackDrop}>
      <div className={s.modal}>
        <button type="button" className={s.btn} onClick={onClose}>
          <svg className={s.exit}>
            <use href={`${sprite}#icon-crossred`} />
          </svg>
        </button>
        <h4 className={s.text_edit}>Edit information</h4>
        <div className={s.wrapper}>
          <div className={s.big_user}>
            <svg className={s.icon_big}>
              <use href={`${sprite}#icon-user`} />
            </svg>
          </div>
          <div className={s.btns}>
            <button className={s.link}></button>
            <button className={s.upload}>Upload photo</button>
          </div>
        </div>
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
        <button className={s.btn_save}>Save</button>
      </div>
    </div>
  );
};
export default ModalEditUser;
