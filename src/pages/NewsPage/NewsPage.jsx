import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../components/Pagination/Pagination';
import SearchField from '../../components/SearchField/SearchField';
import Title from '../../components/Title/Title';
import s from './NewsPage.module.css';

const NewsPage = () => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <Title>News</Title>
        <SearchField />
      </div>
      <NewsList />
      <Pagination />
    </div>
  );
};
export default NewsPage;
