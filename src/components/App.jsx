import user from '../json/user.json';
import statisticsData from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

import { ProfileBotton } from './profile_card/Botton_card';
import { ProfileTop } from './profile_card/Top_cad';
import { Statistics } from './Statistics_section/statistics';
import { FriendList } from './friend_list/FriendList';
import { TransactionHistory } from './transactions/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        color: '#010101',
        paddingTop:"40px",
      }}
    >
      <div style={{
        backgroundColor: 'rgba(220, 214, 214, 0.6)',
        marginBottom: '40px',
        padding: '20px 0 20px 0'
        
      }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: 8,
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpasing: 0.02,
            color: '#4d4d51',
            margin: " 0 auto",
            paddingTop: "12px",
            maxWidth: "120px",
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '4px'
            }}
        >
          <ProfileTop
            username={user.username}
            userTag={user.tag}
            userLocation={user.location}
            userImg={user.avatar}
          />
          <ProfileBotton userStats={user.stats} />
        </div>
      </div>
      <Statistics
      stats={statisticsData} />
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory
          items={transactions}/>
      </div>
    </div>
  );
};