import s from './ModalApproveAction.module.css';
import catImage from '../../assets/images/cat.png';
import sprite from '../../assets/icons.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const ModalApproveAction = ({ onClose, onConfirm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/home');
    } catch (error) {
      alert('Failed to log out. Please try again.');
    }
  };
  return (
    <div className={s.backdrop} onClick={handleBackDrop}>
      <div className={s.modal}>
        <button type="button" className={s.btn} onClick={onClose}>
          <svg className={s.exit}>
            <use href={`${sprite}#icon-crossred`} />
          </svg>
        </button>
        <div className={s.content}>
          <div className={s.imgCover}>
            <img src={catImage} alt="cat" className={s.img} />
          </div>
          <div>
            <p className={s.text}>Already leaving?</p>
            <div className={s.buttons}>
              <button className={s.yes} type="button" onClick={handleLogout}>
                Yes
              </button>{' '}
              <button className={s.cancel} type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalApproveAction;
