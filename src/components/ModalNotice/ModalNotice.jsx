import s from './ModalNotice.module.css';
import sprite from '../../assets/icons.svg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectNotice, selectNoticeById } from '../../redux/notices/selectors';
const ModalNotice = ({ onClose }) => {
  const notice = useSelector(selectNoticeById);

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
            <button type="button" className={s.btn_sell}>
              Sell
            </button>
            <img src={notice.imgURL} alt={notice.title} className={s.image} />
          </div>
          <p>{notice.title}</p>
          <div className={s.stars}>
            <svg className={s.icon_start}>
              <use href={`${sprite}#icon-Star`} />
            </svg>
            <svg className={s.icon_start}>
              <use href={`${sprite}#icon-Star`} />
            </svg>
            <svg className={s.icon_start}>
              <use href={`${sprite}#icon-Star`} />
            </svg>
            <svg className={s.icon_start}>
              <use href={`${sprite}#icon-Star`} />
            </svg>
            <svg className={s.icon_start}>
              <use href={`${sprite}#icon-Star`} />
            </svg>
            <div>{notice.popularity}</div>
          </div>
          <div className={s.description}>
            <div className={s.small_description}>
              <p className={s.name}>Name</p>
              <p className={s.name_backend}>{notice.name}</p>
            </div>
            <div className={s.small_description}>
              <p className={s.name}>Birthday</p>
              <p className={s.name_backend}>{notice.birthday}</p>
            </div>
            <div className={s.small_description}>
              <p className={s.name}>Sex</p>
              <p className={s.name_backend}>{notice.sex}</p>
            </div>
            <div className={s.small_description}>
              <p className={s.name}>Species</p>
              <p className={s.name_backend}>{notice.species}</p>
            </div>
          </div>
          <p className={s.comment}>{notice.comment}</p>

          <div className={s.price}>${notice.price}</div>
          <div className={s.btns}>
            <button className={s.add}>
              Add to
              <svg className={s.icon_heart}>
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </button>

            <button className={s.contacts}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalNotice;
