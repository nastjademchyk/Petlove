import s from './NewsItem.module.css';

const NewsItem = ({ item }) => {
  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <li className={s.wrapper}>
      <img src={item.imgUrl} alt={item.title} className={s.img} />
      <h3 className={s.header}>{item.title}</h3>
      <p className={s.description}>{item.text}</p>
      <div className={s.box}>
        <p className={s.date}>{formatDate(item.date)}</p>
        <a className={s.read} href={item.url} target="_blank">
          Read more
        </a>
      </div>
    </li>
  );
};

export default NewsItem;
