import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import clsx from 'clsx';

const Nav = ({ isHomePage }) => {
  return (
    <ul className={s.nav}>
      <li className={clsx(s.li, isHomePage && s.liHome)}>
        <NavLink to="/news" className={s.link}>
          News
        </NavLink>
      </li>

      <li className={clsx(s.li, isHomePage && s.liHome)}>
        <NavLink to="/notices" className={s.link}>
          Find pet
        </NavLink>
      </li>
      <li className={clsx(s.li, isHomePage && s.liHome)}>
        <NavLink to="/friends" className={s.link}>
          Our friends
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
