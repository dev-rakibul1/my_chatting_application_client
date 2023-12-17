import CloseIcon from "@mui/icons-material/Close";

import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import { Tooltip, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import * as React from "react";
import "../../../components/share/Share.css";

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

const PostTag = () => {
  // console.log(postFontSize);

  // console.log(newEntries);

  return (
    <div className="share-bottom">
      <div className="share-options">
        {/* photo and video */}
        <Tooltip title="Photo or Video">
          <div className="share-option">
            <PermMedia
              htmlColor="green"
              className="share-icon"
              sx={{
                marginRight: "10px",
              }}
            />

            {/* <span className="share-option-text">Photo or Video</span> */}
            <Typography
              variant="span"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "14px",
                  md: "14px",
                  lg: "14px",
                  xl: "14px",
                },
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
              className="share-option-text"
            >
              Photo or Video
            </Typography>
          </div>
        </Tooltip>

        {/* Location */}
        <Tooltip title="Location">
          <div className="share-option">
            <Room
              htmlColor="tomato"
              className="share-icon"
              sx={{
                marginRight: "10px",
              }}
            />

            {/* <span className="share-option-text">Location</span> */}
            <Typography
              variant="span"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "14px",
                  md: "14px",
                  lg: "14px",
                  xl: "14px",
                },
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
              className="share-option-text"
            >
              Location
            </Typography>
          </div>
        </Tooltip>

        {/* Tags */}
        <Tooltip title="Tags">
          <div className="share-option">
            <Label
              htmlColor="blue"
              className="share-icon"
              sx={{
                marginRight: "10px",
              }}
            />

            {/* <span className="share-option-text">Tags</span> */}
            <Typography
              variant="span"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "14px",
                  md: "14px",
                  lg: "14px",
                  xl: "14px",
                },
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
              className="share-option-text"
            >
              Tags
            </Typography>
          </div>
        </Tooltip>

        {/* Feelings */}
        <Tooltip title="Feelings">
          <div className="share-option">
            <EmojiEmotions
              htmlColor="#FFD700"
              className="share-icon"
              sx={{
                marginRight: "10px",
              }}
            />

            {/* <span className="share-option-text">Feelings</span> */}
            <Typography
              variant="span"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "14px",
                  md: "14px",
                  lg: "14px",
                  xl: "14px",
                },
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
              className="share-option-text"
            >
              Feelings
            </Typography>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default PostTag;
