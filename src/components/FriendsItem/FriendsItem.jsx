import s from './FriendsItem.module.css';

const FriendsItem = ({ friend }) => {
  const formatPhoneNumber = phone => {
    if (!phone) return '';
    const match = phone.match(/^(\+38)(0\d{2})(\d{3})(\d{2})(\d{2})$/);
    if (!match) return phone;
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
  };

  return (
    <li className={s.wrapper}>
      <p className={s.hours}>Day and night</p>
      <div className={s.box}>
        <div className={s.bow_with_image}>
          {' '}
          <img src={friend.imageUrl} alt={friend.title} className={s.image} />
        </div>

        <div className={s.box_with_info}>
          <h3 className={s.header}>{friend.title}</h3>
          <div className={s.list}>
            {friend.email ? (
              <p className={s.additional}>
                Email: <span className={s.accent}>{friend.email}</span>
              </p>
            ) : (
              <p className={s.additional}>
                Email: <span className={s.accent}>phone only</span>
              </p>
            )}

            {friend.address ? (
              <p className={s.additional}>
                Address:{' '}
                <span className={s.accent}>
                  {' '}
                  {friend.address.length > 20
                    ? friend.address.slice(0, 20) + '...'
                    : friend.address}
                </span>
              </p>
            ) : (
              <p className={s.additional}>
                Address: <span className={s.accent}>website only</span>
              </p>
            )}
            {friend.phone ? (
              <p className={s.additional}>
                Phone:{' '}
                <span className={s.accent}>
                  {' '}
                  {formatPhoneNumber(friend.phone)}
                </span>
              </p>
            ) : (
              <p className={s.additional}>
                Phone: <span className={s.accent}>email only</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
export default FriendsItem;
