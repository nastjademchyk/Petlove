import s from './EditUserBtn.module.css';
import sprite from '../../assets/icons.svg';

const EditUserBtn = ({ onClick }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      <svg clipPathUnits={s.svg}>
        <use href={`${sprite}#icon-pencil`} className={s.pencil} width={18} />
      </svg>
    </button>
  );
};

export default EditUserBtn;
