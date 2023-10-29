import { FriendListItem } from "./FriendListItem"


export const FriendList = ({friends}) => {
    return (
      <ul>
        {friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id} /> 
        ))}
       </ul>
  )  
}

// style={{
//         color: product.isFruit(true) ? 'magenta' : 'darkgreen'
//       }}