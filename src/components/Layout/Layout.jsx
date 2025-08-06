import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  return (
    <>
      <Header isHomePage={isHomePage} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
