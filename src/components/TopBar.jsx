import { Chat, Home, Notifications, Person, Search } from "@mui/icons-material";
import "./TopBar.css";

import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // top bar container
    <div className="topBarContainer">
      {/* top bar left */}
      <div className="topBar-left">
        {/* top bar logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">My Chat</div>
        </Link>
      </div>

      {/* top bar center */}
      <Box
        className="topBar-center"
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
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
      </Box>

      {/* top bar right */}
      <div className="topBar-right">
        <ul className="topBar-links">
          {/* top bar link */}
          <li className="topBar-link">
            <Link to="/">
              <Home className="topBar-home" />
            </Link>
          </li>
          <li className="topBar-link">Timeline</li>
        </ul>

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
        {/* extra profile */}
        <div className="topBarIconItem">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              m: 0,
              p: 0,
            }}
          >
            {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
              <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ m: 0, p: 0 }}>
                  <img
                    src="/assets/person/1.jpeg"
                    alt="profile"
                    className="topBar-img"
                  />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
