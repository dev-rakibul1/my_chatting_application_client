import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./Friends.css";

const Friends = ({ user }) => {
  const { username, profilePicture } = user;
  return (
    <div>
      <div className="friends-wrapper">
        <div className="friend-left">
          <img src={profilePicture} alt="friend" className="friends-images" />
          <div className="friends-info">
            <h4 className="friend-title">{username}</h4>
            <span className="user-friend-count">2.7k Friends</span>
          </div>
        </div>
        <div className="friend-right">
          <IconButton color="primary" aria-label="add to shopping cart">
            <MoreVert className="friend-icons" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Friends;
