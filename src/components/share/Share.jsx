import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import * as React from "react";

import {
  EmojiEmotions,
  Label,
  PermMedia,
  Public,
  Room,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import "./Share.css";

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

const Share = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="share">
      <div>
        <div onClick={handleClickOpen}>
          <div className="share-wrapper">
            {/* share top */}
            {/* poster title information */}
            <div className="poster-title-img">
              <img
                src="/assets/person/1.jpeg"
                alt="post-profile"
                className="post-top-profile"
              />
              <div>
                <span className="user-post-name">Katrina Turquotte</span>
                <span className="user-post-date">
                  <Public className="post-public-icon" /> Public
                </span>
              </div>
            </div>
            <div className="share-top">
              <input
                type="text"
                className="share-input"
                placeholder="What's in your mind? Katrin..."
              />
            </div>
            {/* hr */}
            <hr className="share-hr" />
            {/* share bottom */}
            <div className="share-bottom">
              <div className="share-options">
                {/* photo and video */}
                <div className="share-option">
                  <PermMedia htmlColor="green" className="share-icon" />
                  <span className="share-option-text">Photo or Video</span>
                </div>

                {/* Location */}
                <div className="share-option">
                  <Room htmlColor="tomato" className="share-icon" />
                  <span className="share-option-text">Location</span>
                </div>

                {/* Tags */}
                <div className="share-option">
                  <Label htmlColor="blue" className="share-icon" />
                  <span className="share-option-text">Tags</span>
                </div>

                {/* Feelings */}
                <div className="share-option">
                  <EmojiEmotions htmlColor="#FFD700" className="share-icon" />
                  <span className="share-option-text">Feelings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Create post
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <div className="share-wrapper">
              {/* share top */}
              {/* poster title information */}
              <div className="poster-title-img">
                <img
                  src="/assets/person/1.jpeg"
                  alt="post-profile"
                  className="post-top-profile"
                />
                <div>
                  <span className="user-post-name">Katrina Turquotte</span>
                  <span className="user-post-date">
                    <Public className="post-public-icon" /> Public
                  </span>
                </div>
              </div>
              <div className="share-top">
                {/* <input type="text" /> */}
                <textarea
                  className="share-input"
                  name=""
                  id=""
                  cols="10"
                  rows="5"
                  placeholder="What's in your mind? Katrin...
                  "
                ></textarea>
              </div>
              {/* hr */}
              <hr className="share-hr" />
              {/* share bottom */}
              <div className="share-bottom">
                <div className="share-options">
                  {/* photo and video */}
                  <div className="share-option">
                    <PermMedia htmlColor="green" className="share-icon" />
                    <span className="share-option-text">Photo or Video</span>
                  </div>

                  {/* Location */}
                  <div className="share-option">
                    <Room htmlColor="tomato" className="share-icon" />
                    <span className="share-option-text">Location</span>
                  </div>

                  {/* Tags */}
                  <div className="share-option">
                    <Label htmlColor="blue" className="share-icon" />
                    <span className="share-option-text">Tags</span>
                  </div>

                  {/* Feelings */}
                  <div className="share-option">
                    <EmojiEmotions htmlColor="#FFD700" className="share-icon" />
                    <span className="share-option-text">Feelings</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
          <Box sx={{ my: 2, px: 2 }}>
            <Button
              variant="contained"
              sx={{ width: "100%", backgroundColor: "green" }}
            >
              Submit
            </Button>
          </Box>
        </BootstrapDialog>
      </div>
    </div>
  );
};

export default Share;
