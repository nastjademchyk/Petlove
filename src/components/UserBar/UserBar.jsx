import s from './UserBar.module.css';
import sprite from '../../assets/icons.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';

const UserBar = () => {
  const { name } = useSelector(selectUser);

  return (
    <Link to="/profile" className={s.wrapper}>
      <div className={s.iconCircle}>
        <svg className={s.icon}>
          <use href={`${sprite}#icon-user`} />
        </svg>
      </div>
      <p className={s.name}>{name || 'User'}</p>
    </Link>
  );
};

export default UserBar;
