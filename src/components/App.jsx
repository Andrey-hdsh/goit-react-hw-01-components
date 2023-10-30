
import user from '../json/user.json';
import statisticsData from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

import { Prolile } from './profile_card/profile_card';
import { Statistics } from './Statistics_section/statistics';
import { FriendList } from './friend_list/FriendList';
import { TransactionHistory } from './transactions/transactions';
import { Container } from 'Container.style';

export const App = () => {
  return (
    <Container>
      <Prolile
        username={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userImg={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
