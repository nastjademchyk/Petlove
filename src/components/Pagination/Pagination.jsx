import s from './Pagination.module.css';
import sprite from '../../assets/icons.svg';

const Pagination = () => {
  return (
    <div className={s.pagination}>
      <button className={s.double_left} type="button">
        <svg className={s.svg}>
          <use href={`${sprite}#icon-left`} className={s.use} />
        </svg>
        <svg className={s.svg}>
          <use href={`${sprite}#icon-left`} className={s.use} />
        </svg>
      </button>
      <button className={s.left} type="button">
        <svg className={s.svg}>
          <use href={`${sprite}#icon-left`} className={s.use} />
        </svg>
      </button>
      <div className={s.numbers}>
        <p>NUMBERS</p>
      </div>
      <button className={s.right} type="button">
        <svg className={s.svg}>
          <use href={`${sprite}#icon-right`} className={s.use} />
        </svg>
      </button>
      <button className={s.double_right} type="button">
        <svg className={s.svg}>
          <use href={`${sprite}#icon-right`} className={s.use} />
        </svg>
        <svg className={s.svg}>
          <use href={`${sprite}#icon-right`} className={s.use} />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
