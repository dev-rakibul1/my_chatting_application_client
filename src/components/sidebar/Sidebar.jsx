import {
  Bookmark,
  Chat,
  Event,
  Group,
  PlayCircleFilled,
  QuestionAnswer,
  RssFeed,
  School,
  Work,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Users } from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          {/* items 01 */}
          <Link to="/feedPages">
            <li className="sidebar-items">
              <RssFeed className="sidebar-icon" />
              <span className="sidebar-list-item-text">Feed</span>
            </li>
          </Link>

          {/* items 02 */}
          <Link to="/chats">
            <li className="sidebar-items">
              <Chat className="sidebar-icon" />
              <span className="sidebar-list-item-text">Chats</span>
            </li>
          </Link>

          {/* items 03 */}
          <Link to="/videos">
            <li className="sidebar-items">
              <PlayCircleFilled className="sidebar-icon" />
              <span className="sidebar-list-item-text">Videos</span>
            </li>
          </Link>

          {/* items 04 */}
          <Link to="/groups">
            <li className="sidebar-items">
              <Group className="sidebar-icon" />
              <span className="sidebar-list-item-text">Groups</span>
            </li>
          </Link>

          {/* items 05 */}
          <li className="sidebar-items">
            <Bookmark className="sidebar-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>

          {/* items 06 */}
          <li className="sidebar-items">
            <QuestionAnswer className="sidebar-icon" />
            <span className="sidebar-list-item-text">Questions</span>
          </li>

          {/* items 07 */}
          <Link to="/jobsPages">
            <li className="sidebar-items">
              <Work className="sidebar-icon" />
              <span className="sidebar-list-item-text">Jobs</span>
            </li>
          </Link>

          {/* items 08 */}
          <li className="sidebar-items">
            <Event className="sidebar-icon" />
            <span className="sidebar-list-item-text">Events</span>
          </li>

          {/* items 09 */}
          <li className="sidebar-items">
            <School className="sidebar-icon" />
            <span className="sidebar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className="sidebar-btn">Show more</button>
        <hr className="sidebar-hr" />

        {/* friend list */}
        <ul className="sidebar-friend-list">
          {Users?.map((user) => (
            <CloseFriends key={user?.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
