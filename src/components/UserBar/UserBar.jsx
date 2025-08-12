import s from './UserBar.module.css';
import sprite from '../../assets/icons.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const UserBar = () => {
  const { name } = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
      <div className={s.iconCircle}>
        <svg className={s.icon}>
          <use href={`${sprite}#icon-user`} />
        </svg>
      </div>
      <p className={s.name}>{name || 'User'}</p>
    </div>
  );
};

export default UserBar;
