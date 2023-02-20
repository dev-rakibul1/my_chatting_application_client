import {
  Chat,
  Home,
  MoreVert,
  Notifications,
  Person,
  Public,
  Search,
} from "@mui/icons-material";
import "./TopBar.css";

import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";
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
          <PopupState
            variant="popper"
            popupId="demo-popup-popper"
            style={{ boxShadow: "1px 2px 1pc #000" }}
          >
            {(popupState) => (
              <div>
                <Box {...bindToggle(popupState)}>
                  <div className="topBarIconItem">
                    <Chat />
                    <span className="topBar-icon-badge">3</span>
                  </div>
                </Box>
                <Popper {...bindPopper(popupState)} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper style={{ maxWidth: "320px" }}>
                        <Box
                          sx={{
                            p: 2,
                            backgroundColor: "#fff",
                          }}
                        >
                          {/* user chat title */}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Typography variant="h5" sx={{ fontWeight: 600 }}>
                              Chats
                            </Typography>
                            <Typography variant="span">
                              <IconButton
                                color="green"
                                aria-label="add to shopping cart"
                              >
                                <MoreVert />
                              </IconButton>
                            </Typography>
                          </Box>

                          {/* chat search */}
                          <Box className="chat-search-wrap">
                            <input
                              type="text"
                              placeholder="Search friends"
                              className="chat-search"
                            />

                            <SearchIcon className="chat-search-icon" />
                          </Box>
                        </Box>

                        {/* friend 01 */}
                        <Box
                          className="poster-title-img"
                          sx={{
                            p: 2,
                            borderBottom: "1px solid #ddd",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src="/assets/person/2.jpeg"
                            alt="post-profile"
                            className="post-top-profile"
                          />
                          <Box>
                            <Typography
                              variant="span"
                              sx={{
                                fontSize: "16px",
                                fontWeight: "600",
                                textTransform: "capitalize",
                              }}
                              className="user-post-name"
                            >
                              John Doe
                            </Typography>
                            <Typography sx={{ fontSize: "13px" }}>
                              Hi, May I talk to you...?
                            </Typography>

                            {/* Message time */}
                            <Typography
                              variant="span"
                              sx={{
                                fontSize: "11px",
                                fontWeight: 600,
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                              }}
                            >
                              <Public
                                sx={{
                                  fontSize: "11px",
                                  marginRight: "3px",
                                }}
                              />{" "}
                              <span>4m ago</span>
                            </Typography>
                          </Box>
                        </Box>

                        {/* friend 02 */}
                        <Box
                          className="poster-title-img"
                          sx={{
                            p: 2,
                            borderBottom: "1px solid #ddd",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src="/assets/person/1.jpeg"
                            alt="post-profile"
                            className="post-top-profile"
                          />
                          <div>
                            <Typography
                              variant="span"
                              sx={{
                                fontSize: "16px",
                                fontWeight: "600",
                                textTransform: "capitalize",
                              }}
                              className="user-post-name"
                            >
                              Safak Kocaoglu
                            </Typography>
                            <Typography sx={{ fontSize: "13px" }}>
                              Lorem ipsum, dolor sit amet co...
                            </Typography>

                            {/* Message time */}
                            <Typography
                              variant="span"
                              sx={{
                                fontSize: "11px",
                                fontWeight: 600,
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                              }}
                            >
                              <Public
                                sx={{
                                  fontSize: "11px",
                                  marginRight: "3px",
                                }}
                              />{" "}
                              <span>13m ago</span>
                            </Typography>
                          </div>
                        </Box>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </div>
            )}
          </PopupState>

          {/* *********************** */}

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
