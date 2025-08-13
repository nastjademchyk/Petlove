import s from './ModalAttention.module.css';
import sprite from '../../assets/icons.svg';
import godImage from '../../assets/images/dog.png';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const ModalAttention = ({ onClose }) => {
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
        <div className={s.content}>
          <div className={s.imgCover}>
            <img src={godImage} alt="dog" className={s.img} />
          </div>
          <p className={s.attention}>Attention</p>
          <p className={s.text}>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
          <div className={s.btns}>
            <NavLink to="/login">
              {' '}
              <button className={s.login}>Log In</button>
            </NavLink>
            <NavLink to="/register">
              {' '}
              <button className={s.registr}>Registration</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalAttention;
