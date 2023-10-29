import css from './profile_card.module.css'

export const ProfileTop = ({ username, userImg, userTag, userLocation }) => {
  return (
    <div>
      <img className={css.image} src={userImg} alt={username} width="60" height="60" />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{userTag}</p>
      <p>{userLocation}</p>
    </div>
  );
};
