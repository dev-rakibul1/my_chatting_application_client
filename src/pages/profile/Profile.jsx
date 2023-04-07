import { Collections, PhotoCamera } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ProfileTabs from "../../components/profileTabs/ProfileTabs";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Profile = () => {
  const [user, setUser] = useState({});
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(`/users?username=john`);
      setUser(res?.data);
    };
    fetchUserData();
  }, []);

  console.log(user);

  const [open, setOpen] = React.useState(false);
  const [openCoverPhoto, setOpenCoverPhoto] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // cover photo
  const handleCoverPhoto = () => {
    setOpenCoverPhoto(true);
  };
  const handleCoverPhotoClose = () => {
    setOpenCoverPhoto(false);
  };

  // image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setPreviewImage(reader.result);
    });

    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="profile my-chat-container">
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Sidebar />
        </Box>
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="user-cover-photo-wrap">
              <div className="cover-photo-wrap">
                <img
                  src="/assets/cover.jpg"
                  alt="user-cover"
                  className="user-cover-photo"
                />

                {/* start modal dialog and for cover photo */}
                <div>
                  <span
                    className="cover-photo-icon-wrap"
                    onClick={handleCoverPhoto}
                  >
                    <PhotoCamera className="cover-photo-icon" />{" "}
                    <span>Edit cover photo</span>
                  </span>

                  <BootstrapDialog
                    onClose={handleCoverPhotoClose}
                    aria-labelledby="customized-dialog-cover"
                    open={openCoverPhoto}
                  >
                    <BootstrapDialogTitle
                      id="customized-dialog-cover"
                      onClose={handleCoverPhotoClose}
                    >
                      Change cover photo
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                      <div>
                        <div className="preview-container">
                          {previewImage ? (
                            <>
                              <img
                                src={previewImage}
                                alt=""
                                className="preview-image"
                              />
                            </>
                          ) : (
                            <div className="file-upload-icon-wrap">
                              <Collections className="file-upload-icon" />
                            </div>
                          )}
                        </div>
                        <label htmlFor="file-input" className="file-label">
                          Choose an Image
                        </label>
                        <input
                          type="file"
                          id="file-input"
                          className="file-input"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </DialogContent>
                    <Box sx={{ maxWidth: "100%", p: 2 }}>
                      <Button
                        variant="contained"
                        onClick={handleClose}
                        sx={{ maxWidth: "100%", width: "100%" }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </BootstrapDialog>
                </div>
                {/* end modal dialog */}
              </div>
              <div className="user-wrap">
                {/* user */}
                <div className="user">
                  <div className="profile-picture">
                    <img
                      src="/assets/person/1.jpeg"
                      alt="user"
                      className="user-img"
                    />

                    {/* start modal dialog */}
                    <div>
                      <span
                        onClick={handleClickOpen}
                        className="profile-photo-upload-icon"
                      >
                        <PhotoCamera style={{ fontSize: "25px" }} />
                      </span>
                      <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                      >
                        <BootstrapDialogTitle
                          id="customized-dialog-title"
                          onClose={handleClose}
                        >
                          Change profile picture
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                          <div>
                            <div className="preview-container">
                              {previewImage ? (
                                <>
                                  <img
                                    src={previewImage}
                                    alt=""
                                    className="preview-image"
                                  />
                                </>
                              ) : (
                                <div className="file-upload-icon-wrap">
                                  <Collections className="file-upload-icon" />
                                </div>
                              )}
                            </div>
                            <label htmlFor="file-input" className="file-label">
                              Choose an Image
                            </label>
                            <input
                              type="file"
                              id="file-input"
                              className="file-input"
                              onChange={handleImageUpload}
                            />
                          </div>
                        </DialogContent>
                        <Box sx={{ maxWidth: "100%", p: 2 }}>
                          <Button
                            variant="contained"
                            onClick={handleClose}
                            sx={{ maxWidth: "100%", width: "100%" }}
                          >
                            Submit
                          </Button>
                        </Box>
                      </BootstrapDialog>
                    </div>
                    {/* end modal dialog */}
                  </div>

                  <div className="user-info">
                    <h1 className="user-title">
                      {/* <h1>Name is : {userData.username}</h1> */}
                      {user?.username} <span>(Katrina Turquotte)</span>
                    </h1>
                    <span>1.7K Friends</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* profile-tabs */}
          <div className="profile-tabs">
            <ProfileTabs />
          </div>
          <hr />
          <div className="profile-right-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
