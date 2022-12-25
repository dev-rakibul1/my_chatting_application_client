import "./Online.css";

const Online = ({ online }) => {
  const { profilePicture, username } = online;
  return (
    <>
      <li className="right-bar-friend">
        <div className="right-bar-profile-fn-img">
          <img
            src={profilePicture}
            className="right-bar-fn-img"
            alt="active friend"
          />
          <div className="right-bar-online"></div>
        </div>
        <div className="right-bar-username">{username}</div>
      </li>
    </>
  );
};

export default Online;
