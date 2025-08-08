import { useDispatch, useSelector } from 'react-redux';
import s from './FriendsList.module.css';
import {
  selectError,
  selectFriends,
  selectIsLoading,
} from '../../redux/friends/selectors';
import { useEffect } from 'react';
import FriendsItem from '../FriendsItem/FriendsItem';
import { fetchFriends } from '../../redux/friends/operations';
import Loader from '../Loader/Loader';

const FriendsList = ({ loadingProgress }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader percentage={loadingProgress} />}
      {error && <p>{error}</p>}
      <ul className={s.wrapper}>
        {friends?.map(friend => (
          <FriendsItem key={friend._id} friend={friend} />
        ))}
      </ul>
    </>
  );
};
export default FriendsList;
