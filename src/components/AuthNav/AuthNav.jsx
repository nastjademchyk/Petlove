import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = ({ isHomePage }) => {
  return (
    <div className={s.wrapper}>
      <NavLink to="/login">
        <button className={clsx(s.btn, isHomePage && s.homeBtn)} type="button">
          Log In
        </button>
      </NavLink>
      <NavLink to="/register">
        <button
          className={clsx(s.btnRegister, isHomePage && s.homeBtnRegistration)}
          type="button"
        >
          Registration
        </button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
