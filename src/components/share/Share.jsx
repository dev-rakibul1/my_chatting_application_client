import CloseIcon from "@mui/icons-material/Close";

import { Public } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { ClearIcon } from "@mui/x-date-pickers";
import PropTypes from "prop-types";
import * as React from "react";
import { useCreatePostMutation } from "../../redux/api/postApiSlice";
import SmallSpinner from "../../shared/spinner/smallSpinner";
import { uploadImageToImgBB } from "../../utils/uploadImageToImgBB";
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
  const [newEntries, setNewEntries] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [postFontSize, setPostFontSize] = React.useState("");
  const [isPickerVisible, setPickerVisible] = React.useState(false);
  const [postMessageErrorHandle, setPostMessageErrorHandle] =
    React.useState("");
  const [currentEmoji, setCurrentEmoji] = React.useState(null);

  const [createPost, { isLoading }] = useCreatePostMutation({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  function handleChange(event) {
    setCurrentEmoji(event.target.value);

    const form = event.target;
    const postDes = form.defaultValue;
    // console.dir(postDes.length);

    if (postDes.length >= 0 && postDes.length <= 60) {
      setPostFontSize("large-font");
    }
    if (postDes.length >= 61 && postDes.length <= 120) {
      setPostFontSize("medium-font");
    }
    if (postDes.length > 120) {
      setPostFontSize("small-font");
    }
  }

  // console.log(postFontSize);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Post image
  const handleInputChange = (event) => {
    const postImage = event.target.files[0];

    if (postImage) {
      const newEntry = {
        postImage,
        imageUrl: URL.createObjectURL(postImage),
      };

      setNewEntries([...newEntries, newEntry]);

      // Log the image URL to the console
      console.log("Image URL:", newEntry.imageUrl);
    }
  };

  // Remove image from the upload image
  const removeImage = (index) => {
    const updatedEntries = [...newEntries];
    updatedEntries.splice(index, 1);
    setNewEntries(updatedEntries);
  };

  const handlePostData = async (event) => {
    event.preventDefault();
    const form = event.target;
    const postDes = form.postDescription.value;

    try {
      const imgBBUrlsArray = [];

      // Upload all images to ImgBB
      const updatedEntries = await Promise.all(
        newEntries.map(async (entry, index) => {
          const imageUrl = await uploadImageToImgBB(entry.postImage);
          imgBBUrlsArray.push(imageUrl);
          return {
            ...entry,
            imageUrl,
          };
        })
      );

      // Update the state with ImgBB URLs
      setNewEntries(updatedEntries);

      if (!postDes && !imgBBUrlsArray.length) {
        setPostMessageErrorHandle("Description or image required.");
        return;
      }else{
        setPostMessageErrorHandle("")
      }

      const postPayload = {
        user: "657cc481065fb89f5048452d",
        description: postDes,
        postImages: imgBBUrlsArray,
      };
      createPost(postPayload);

      console.log(postPayload);
      form.reset();
    } catch (error) {
      // Handle errors here
      console.error("Error uploading images to ImgBB:", error.message);
    }
  };

  // console.log(newEntries);

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
              {/* Post components */}
              {/* <PostTag /> */}
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
                    className={`share-input ${postFontSize}`}
                    name="postDescription"
                    id=""
                    cols="10"
                    rows="5"
                    placeholder="What's in your mind? Katrin..."
                    value={currentEmoji}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* 6. Profile pic */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    {newEntries.map((entry, index) => (
                      <div key={index} className="mt-3 post-image-wrap">
                        <img
                          style={{
                            width: "100px",
                            maxWidth: "100%",
                            height: "70px",
                            objectFit: "cover",
                          }}
                          src={entry.imageUrl || ""}
                          alt=""
                        />
                        <span
                          className="remove-image-from-upload"
                          onClick={() => removeImage(index)}
                        >
                          <ClearIcon style={{ fontSize: "12px" }} />
                        </span>
                      </div>
                    ))}
                  </div>

                  <hr className="share-hr" />
                  <input
                    type="file"
                    name="postImage"
                    id="postImage"
                    onChange={handleInputChange}
                  />
                </div>
                {/* hr */}
                <hr className="share-hr" />
                {/* share bottom */}
              </div>
            </DialogContent>

            {postMessageErrorHandle && (
              <>
                <div className="" style={{ textAlign: "center", color: "red" }}>
                  <small style={{ padding: "0 10px", display: "inline-block" }}>
                    {postMessageErrorHandle}
                  </small>
                </div>
              </>
            )}

            <div className="element-center">
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ width: "90%", backgroundColor: "green", m: 2 }}
              >
                {isLoading ? <SmallSpinner /> : "Submit"}
              </Button>
            </div>
          </form>
        </BootstrapDialog>
      </div>
    </div>
  );
};

export default Share;
