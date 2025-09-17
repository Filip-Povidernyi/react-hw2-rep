import FriendItem from "./FriendItem";
import css from "./style.module.css";


const FriendList = ({ data }) => {
    return (
        <ul className={css.friendsList}>
            {data.map(friend => (
                <FriendItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
            ))}
        </ul>
    );
};


export default FriendList;