import s from './ModalNotice.module.css';
import sprite from '../../assets/icons.svg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectNotice } from '../../redux/notices/selectors';
const ModalNotice = ({ onClose }) => {
  const notice = useSelector(selectNotice);

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
          <div className={s.avatarWrapper}>
            <img src={notice.imgURL} alt={notice.title} />
            <p>{notice.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalNotice;
