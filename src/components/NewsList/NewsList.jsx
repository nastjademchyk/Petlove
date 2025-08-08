import NewsItem from '../NewsItem/NewsItem';
import s from './NewsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectNews,
  selectIsLoading,
  selectError,
} from '../../redux/news/selectors.js';
import { fetchNews } from '../../redux/news/operations';
import Loader from '../Loader/Loader.jsx';

const NewsList = ({ loadingProgress }) => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader percentage={loadingProgress} />}
      {error && <p>{error}</p>}

      <ul className={s.grid}>
        {news?.map(item => (
          <NewsItem key={item._id} item={item} />
        ))}
      </ul>
    </>
  );
};
export default NewsList;
