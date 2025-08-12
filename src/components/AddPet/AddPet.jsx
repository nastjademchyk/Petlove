import s from './AddPet.module.css';
import sprite from '../../assets/icons.svg';
const AddPet = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>My pets</p>
      <button className={s.btn} type="submit">
        Add pet +
      </button>

      {/* <svg className={s.icon}>
        <use xlinkHref={`${sprite}#icon-plus`} />
      </svg> */}
    </div>
  );
};

export default AddPet;
