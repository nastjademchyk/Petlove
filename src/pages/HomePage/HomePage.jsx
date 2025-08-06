import s from './HomePage.module.css';
import image1 from '../../assets/images/web/dogHuman/doghuman-web-x1.png';
import image2 from '../../assets/images/web/dogHuman/doghuman-web-x2.png';

const HomePage = () => {
  return (
    <div className={s.mainwrapper}>
      <div className={s.mainInfo}>
        <h1 className={s.header}>
          Take good <span className={s.accent}>care</span> of your small pets
        </h1>
        <p className={s.text}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <div className={s.image}>
        <div className={s.imageWrapper}>
          <img
            src={image1}
            alt="dog with human"
            srcSet={`${image1} 1x, ${image2} 2x`}
            className={s.image}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
