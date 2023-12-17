import {
  EmojiEmotions,
  Label,
  PermMedia,
  Public,
  Room,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import React from "react";

// -----------------

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

const PostPopup = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <div variant="outlined" onClick={handleClickOpen}>
          Open dialog - 2
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
            Modal title
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
                  placeholder="What's in your mind?"
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
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              submit
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </div>
  );
};

export default PostPopup;
