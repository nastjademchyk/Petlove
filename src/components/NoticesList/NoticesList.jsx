import { useDispatch, useSelector } from 'react-redux';
import s from './NoticesList.module.css';
import {
  selectError,
  selectIsLoading,
  selectNotice,
} from '../../redux/notices/selectors';
import { useEffect } from 'react';
import { fetchNotices } from '../../redux/notices/operations';
import Loader from '../Loader/Loader';
import NoticesItem from '../NoticesItem/NoticesItem';

const NoticesList = ({ loadingProgress }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const notices = useSelector(selectNotice);
  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader percentage={loadingProgress} />}
      {error && <p>{error}</p>}
      <ul className={s.noticeListWrapper}>
        {notices?.map(notice => (
          <NoticesItem key={notice._id} notice={notice} />
        ))}
      </ul>
    </>
  );
};

export default NoticesList;
