import s from './UserBar.module.css';
import sprite from '../../assets/icons.svg';

const UserBar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.iconCircle}>
        <svg className={s.icon}>
          <use href={`${sprite}#icon-user`} />
        </svg>
      </div>
      <p className={s.name}>Name</p>
    </div>
  );
};

export default UserBar;
