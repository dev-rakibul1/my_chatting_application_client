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
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          {/* items 01 */}
          <li className="sidebar-items">
            <RssFeed className="sidebar-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>

          {/* items 02 */}
          <li className="sidebar-items">
            <Chat className="sidebar-icon" />
            <span className="sidebar-list-item-text">Chats</span>
          </li>

          {/* items 03 */}
          <li className="sidebar-items">
            <PlayCircleFilled className="sidebar-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>

          {/* items 04 */}
          <li className="sidebar-items">
            <Group className="sidebar-icon" />
            <span className="sidebar-list-item-text">Groups</span>
          </li>

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
          <li className="sidebar-items">
            <Work className="sidebar-icon" />
            <span className="sidebar-list-item-text">Jobs</span>
          </li>

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
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">Jane doe</span>
          </li>

          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">Jane doe</span>
          </li>

          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">Jane doe</span>
          </li>

          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">Jane doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;