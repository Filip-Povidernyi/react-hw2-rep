import css from "./style.module.css";


const FriendItem = ({ avatar, name, isOnline }) => {

    return (
        <li className={css.item}>
            <span className={css.status}
                style={{ backgroundColor: isOnline ? "green" : "red" }}>
            </span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
};

export default FriendItem;