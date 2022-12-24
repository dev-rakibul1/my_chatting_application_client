import {
  Chat,
  House,
  Notifications,
  Person,
  Search,
} from "@mui/icons-material";
import "./TopBar.css";

const TopBar = () => {
  return (
    // top bar container
    <div className="topBarContainer">
      {/* top bar left */}
      <div className="topBar-left">
        {/* top bar logo */}
        <div className="logo">My Chat</div>
      </div>

      {/* top bar center */}
      <div className="topBar-center">
        <div className="search-box">
          {/* top bar search box */}
          <Search className="search-icon" />
          <input
            type="search"
            name=""
            className="searchInput"
            placeholder="Search my chat..."
          />
        </div>
      </div>

      {/* top bar right */}
      <div className="topBar-right">
        <div className="topBar-links">
          {/* top bar link */}
          <span className="topBar-link">
            <House className="topBar-home" />
          </span>
          <span className="topBar-link">Timeline</span>
        </div>

        {/* icons */}
        <div className="topBarIcons">
          {/* person */}
          <div className="topBarIconItem">
            <Person />
            <span className="topBar-icon-badge">1</span>
          </div>

          {/* person */}
          <div className="topBarIconItem">
            <Chat />
            <span className="topBar-icon-badge">3</span>
          </div>

          {/* person */}
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBar-icon-badge">7</span>
          </div>
        </div>

        {/* profile picture */}
        <img src="/assets/person/1.jpeg" alt="profile" className="topBar-img" />
      </div>
    </div>
  );
};

export default TopBar;
