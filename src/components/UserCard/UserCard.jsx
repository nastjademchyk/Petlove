import PetsBlock from '../PetsBlock/PetsBlock';
import UserBlock from '../UserBlock/UserBlock';
import s from './UserCard.module.css';

const UserCard = () => {
  return (
    <div className={s.wrapper}>
      <UserBlock />
      <PetsBlock />
    </div>
  );
};

export default UserCard;
