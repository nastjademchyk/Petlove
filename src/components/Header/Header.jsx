import AuthNav from '../AuthNav/AuthNav';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import s from './Header.module.css';
import clsx from 'clsx';

const Header = ({ isHomePage }) => {
  return (
    <div className={clsx(s.header, isHomePage && s.home)}>
      <Logo isHomePage={isHomePage} />
      <Nav isHomePage={isHomePage} />
      <AuthNav isHomePage={isHomePage} />
    </div>
  );
};
export default Header;
