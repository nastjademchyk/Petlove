import s from './LogOutBtn.module.css';

const LogOutBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.btn} type="button">
      Log out
    </button>
  );
};
export default LogOutBtn;
