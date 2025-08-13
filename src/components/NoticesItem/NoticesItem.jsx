import s from './NoticesItem.module.css';
import sprite from '../../assets/icons.svg';
import { useState } from 'react';
import ModalAttention from '../ModalAttention/ModalAttention';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import ModalNotice from '../ModalNotice/ModalNotice';

const NoticesItem = ({ notice, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autorisedModalOpen, setAutorisedModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleOpenModal = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    } else {
      setAutorisedModalOpen(true);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);
  const handleCloseAttentionodal = () => setAutorisedModalOpen(false);

  return (
    <li className={s.wrapper}>
      <img src={notice.imgURL} alt={notice.species} className={s.img} />
      <div className={s.title_popularity}>
        <p>{notice.title}</p>
        <div className={s.iconWrapper}>
          <svg className={s.icon_star}>
            <use href={`${sprite}#icon-Star`} />
          </svg>
          <p>{notice.popularity}</p>
        </div>
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
        <div className={s.small_description}>
          <p className={s.name}>Category</p>
          <p className={s.name_backend}>{notice.category}</p>
        </div>
      </div>
      <div className={s.comment}>
        <p className={s.comment_style}>{notice.comment}</p>
      </div>
      <div className={s.bottom}>
        <div className={s.price}>${notice.price}</div>
        <div className={s.btn_svg}>
          <button type="button" className={s.btn} onClick={handleOpenModal}>
            Learn more
          </button>
          <button
            type="button"
            className={s.heart_wrapper}
            onClick={handleOpenModal}
          >
            <svg className={s.icon_heart}>
              <use href={`${sprite}#icon-heart`} />
            </svg>
          </button>
        </div>
      </div>
      {isModalOpen && <ModalAttention onClose={handleCloseModal} />}
      {autorisedModalOpen && <ModalNotice onClose={handleCloseAttentionodal} />}
    </li>
  );
};

export default NoticesItem;
