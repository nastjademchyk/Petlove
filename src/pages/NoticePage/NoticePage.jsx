import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesList from '../../components/NoticesList/NoticesList';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';
import s from './NoticePage.module.css';

const NoticePage = () => {
  return (
    <div className={s.container}>
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
      <NoticesList />
      <Pagination />
    </div>
  );
};
export default NoticePage;
