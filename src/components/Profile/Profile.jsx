import style from "./style.module.css";


const Profile = (data) => {
    const { username, tag, location, avatar, stats } = data.data;
    return (<div className={style.profile}>
        <div className={style.description}>
        <div className={style.user}>
            <img
                src={avatar}
                alt="User avatar"
                className={style.avatar}
                />
            <p className={style.name}>{username}</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
            <li>
                <span className={style.label}>Followers</span>
                <span className={style.quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    </div>)
};

export default Profile;