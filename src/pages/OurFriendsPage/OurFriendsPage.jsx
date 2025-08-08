import FriendsList from '../../components/FriendsList/FriendsList';
import Title from '../../components/Title/Title';
import s from './OurFriendsPage.module.css';
const OurFriendsPage = () => {
  return (
    <div className={s.container}>
      <Title>Our friends</Title>
      <FriendsList />
    </div>
  );
};

export default OurFriendsPage;
