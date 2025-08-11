import s from './ModalApproveAction.module.css';
import catImage from '../../assets/images/cat.png';
import sprite from '../../assets/icons.svg';

const ModalApproveAction = () => {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <button type="submit" className={s.btn}>
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
              <button className={s.yes} type="submit">
                Yes
              </button>{' '}
              <button className={s.cancel} type="submit">
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
