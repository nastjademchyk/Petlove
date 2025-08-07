import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import clsx from 'clsx';

const Nav = ({ isHomePage }) => {
  const buildLinkClass = ({ isActive }) =>
    clsx(s.li, isActive && s.active, isHomePage && s.liHome);

  return (
    <ul className={s.nav}>
      <li>
        <NavLink to="/news" className={buildLinkClass}>
          News
        </NavLink>
      </li>
      <li>
        <NavLink to="/notices" className={buildLinkClass}>
          Find pet
        </NavLink>
      </li>
      <li>
        <NavLink to="/friends" className={buildLinkClass}>
          Our friends
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
