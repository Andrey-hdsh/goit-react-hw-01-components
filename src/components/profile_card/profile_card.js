import { ProfileCardBlock } from './profile_card.styled';

export const Prolile = ({
  username,
  userImg,
  userTag,
  userLocation,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCardBlock>
      <div>
        <img src={userImg} alt={username} width="60" />
        <p>
          <b>{username}</b>
        </p>
        <p>@{userTag}</p>
        <p>{userLocation}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </li>
        <li>
          <span>Views</span>
          <span>
            <b>{views}</b>
          </span>
        </li>
        <li>
          <span>Likes</span>
          <span>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </ProfileCardBlock>
  );
};
