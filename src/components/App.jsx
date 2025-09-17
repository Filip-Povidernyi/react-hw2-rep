import Profile from "./Profile/Profile";
import dataUser from "../dataJson/user.json";
import Statistics from "./Statistics/Statistics";
import data from "../dataJson/data.json"
import FriendList from "./FriendList/FriendList";
import friends from "../dataJson/friends.json"
import Transactions from "./Transactions/Transactions";
import transactions from "../dataJson/transactions.json";

export const App = () => {
  return (
    <>
      <Profile data={dataUser} />
      <Statistics title="Upload stats" data={data} />
      <FriendList data={friends} />
      <Transactions data={transactions} />
    </>
  );
};
