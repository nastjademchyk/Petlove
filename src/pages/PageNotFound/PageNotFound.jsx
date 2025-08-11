import { NavLink } from 'react-router-dom';
import s from './PageNotFound.module.css';
import catimage1 from '../../assets/images/web/notFound/pageNotFound-web-x1.png';
import catimage2 from '../../assets/images/web/notFound/pageNotFound-web-x2.png';
import ModalApproveAction from '../../components/ModalApproveAction/ModalApproveAction';

const PageNotFound = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.notfound}>
        <div className={s.number}>4</div>
        <img
          src={catimage1}
          alt="cat"
          srcSet={`${catimage1} 1x, ${catimage2} 2x`}
          className={s.image}
        />
        <div className={s.number}>4</div>
      </div>
      <p className={s.text}>Ooops! This page not found :(</p>
      <NavLink to="/home">
        <button className={s.btn} type="button">
          To home page
        </button>
      </NavLink>
    </div>
    // <ModalApproveAction />
  );
};
export default PageNotFound;
