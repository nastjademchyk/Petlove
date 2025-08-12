import { CircularProgressbar } from 'react-circular-progressbar';
import AuthNav from '../AuthNav/AuthNav';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserBar from '../UserBar/UserBar';
import s from './Header.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserNav from '../UserNav/UserNav';

const Header = ({ isHomePage }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={clsx(s.header, isHomePage && s.home)}>
      <Logo isHomePage={isHomePage} />
      <Nav isHomePage={isHomePage} />
      {isLoggedIn ? (
        <UserNav isHomePage={isHomePage} />
      ) : (
        <AuthNav isHomePage={isHomePage} />
      )}
    </div>
  );
};
export default Header;
