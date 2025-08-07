import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import Title from '../../components/Title/Title';
import s from './NoticePage.module.css';

const NoticePage = () => {
  return (
    <div className={s.container}>
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
    </div>
  );
};
export default NoticePage;
