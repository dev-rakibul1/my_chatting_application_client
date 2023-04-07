import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import * as React from "react";
import { toast } from "react-hot-toast";

import {
  EmojiEmotions,
  Label,
  PermMedia,
  Public,
  Room,
} from "@mui/icons-material";
import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
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
  const [isPostLoading, setIsPostLoading] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // handle post all data
  const handlePostData = (event) => {
    event.preventDefault();
    // const description = event.form.target.value;
    // console.dir(description);

    setIsPostLoading(true);

    const form = event.target;
    const postDescription = form.postDescription.value;
    const postImage = form.postImage.files;

    // user images
    const imagesHostKey = process.env.REACT_APP_IMAGES_HOST_KEY;
    const url = `https://api.imgbb.com/1/upload?key=${imagesHostKey}`;

    const imagesFormData = new FormData();
    const images = postImage;
    const finalImages = images[0];
    imagesFormData.append("image", finalImages);
    console.log(finalImages);

    fetch(url, {
      method: "POST",
      body: imagesFormData,
    })
      .then((res) => res.json())
      .then((image) => {
        const postInfo = {
          description: postDescription,
          image: image.data.display_url,
        };

        // user for post method
        // fetch("http://localhost:1000/api/v1/posts", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(postInfo),
        // });

        axios
          .post("/v1/posts", postInfo)
          .then(function (response) {
            // alert(response.data.message);
            if (response?.data?.status) {
              toast.success(response.data.message);
            } else {
              toast.error("Post fail!");
            }
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(() => {
            setIsPostLoading(false);
          });
      })
      .catch((error) => console.log(error.message));

    form.reset();
  };

  return (
    <div className="share">
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
        </div>
      </div>

      {/* Share post information Dialog */}
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <form style={{ width: "100%" }} onSubmit={handlePostData}>
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              sx={{ width: "100%" }}
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
                    name="postDescription"
                    id=""
                    cols="10"
                    rows="5"
                    placeholder="What's in your mind? Katrin..."
                    required
                  ></textarea>
                </div>

                {/* hr */}
                <hr className="share-hr" />
                {/* share bottom */}
                <div className="share-bottom">
                  <div className="share-options">
                    {/* photo and video */}
                    <Tooltip title="Photo or Video">
                      <div className="share-option">
                        <div className="post-images-wrapper">
                          <input
                            type="file"
                            name="postImage"
                            id="post-input-images"
                          />
                          <div className="post-images-icon">
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
                        </div>
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
              </div>
            </DialogContent>

            {isPostLoading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  my: 2,
                  px: 2,
                }}
              >
                <LoadingButton
                  loading
                  variant="outlined"
                  sx={{ width: "100%", backgroundColor: "green" }}
                >
                  Fetch data
                </LoadingButton>
              </Box>
            ) : (
              <Box
                sx={{
                  my: 2,
                  px: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", backgroundColor: "green" }}
                >
                  Submit
                </Button>
              </Box>
            )}
          </form>
        </BootstrapDialog>
      </div>
    </div>
  );
};

export default Share;
