import s from './Logo.module.css';
import sprite from '../../assets/icons.svg';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

const Logo = ({ isHomePage }) => {
  return (
    <NavLink to="/home" className={clsx(s.logo, isHomePage && s.homeLogo)}>
      petl
      <svg className={clsx(s.heart, isHomePage && s.heartHome)}>
        <use href={`${sprite}#icon-heart`} />
      </svg>
      ve
    </NavLink>
  );
};

export default Logo;
