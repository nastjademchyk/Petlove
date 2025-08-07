import s from './NewsItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectNews,
  selectIsLoading,
  selectError,
} from '../../redux/news/selectors.js';
import { fetchNews } from '../../redux/news/operations';

const NewsItem = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <p>Here will be list with news</p>
      <ul>
        {news.map(item => (
          <li key={item._id}>
            <p>Title: {item.title}</p>
            <p>Text: {item.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsItem;
