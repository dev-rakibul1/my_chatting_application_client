import "./CloseFriends.css";

const CloseFriends = ({ user }) => {
  const { username, profilePicture } = user;
  return (
    <>
      <li className="sidebar-friend">
        <img className="sidebar-friend-image" src={profilePicture} alt="" />
        <span className="sidebar-friend-name">{username}</span>
      </li>
    </>
  );
};

export default CloseFriends;
