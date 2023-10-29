import css from  './profile_card.module.css'

export const ProfileBotton = ({ userStats: { followers, views, likes } }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <span>Followers</span>
        <span className={css['followers-text']}>{followers}</span>
      </li>
      <li className={css.item}>
        <span>Views</span>
        <span className={css['followers-text']}>{views}</span>
      </li>
      <li className={css.item}>
        <span>Likes</span>
        <span className={css['followers-text']}>{likes}</span>
      </li>
    </ul>
  );
};
