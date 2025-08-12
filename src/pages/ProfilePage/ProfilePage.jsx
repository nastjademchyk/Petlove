import MyNotices from '../../components/MyNotices/MyNotices';
import UserCard from '../../components/UserCard/UserCard';
import s from './ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <div className={s.wrapper}>
      <UserCard />
      <MyNotices />
    </div>
  );
};
export default ProfilePage;
