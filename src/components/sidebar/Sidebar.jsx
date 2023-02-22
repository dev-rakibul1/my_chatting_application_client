import { Users } from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";
import "./Sidebar.css";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <SidebarList />
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
