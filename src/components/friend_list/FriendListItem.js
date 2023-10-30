import { ListFriends } from './friend_list.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListFriends $status={isOnline}>
      <span></span>
      <img src={avatar} alt={name} width="32" />
      <p>{name}</p>
    </ListFriends>
  );
};
