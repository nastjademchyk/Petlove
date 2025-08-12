import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
  const NoticePage = lazy(() => import('../pages/NoticePage/NoticePage'));
  const OurFriendsPage = lazy(() =>
    import('../pages/OurFriendsPage/OurFriendsPage')
  );
  const RegistrationPage = lazy(() =>
    import('../pages/RegistrationPage/RegistrationPage')
  );

  const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
  const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));

  return (
    <>
      <Suspense fallback={<div>Loading, please wait</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticePage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
