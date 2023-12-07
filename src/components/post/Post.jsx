import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  EmojiEmotions,
  MoreVert,
  Public,
  Textsms,
  ThumbUp,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { format } from "timeago.js";
import Spinner from "../../shared/spinner/Spinner";
import "./Post.css";

const Post = ({ post, isLoading }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(null);

  function handleChange(event) {
    setCurrentEmoji(event.target.value);
  }

  const {
    description,
    comments,
    postImages,
    likes,
    id: _id,
    createdAt,
    user,
  } = post;
  console.log("post image", postImages);

  const placeholderProfile =
    "https://i.ibb.co/LY4tvxP/pngfind-com-placeholder-png-6104451.png";

  const [liked, setLiked] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [thumbLikeColor, SetThumbLikeColor] = useState(false);

  const likeHandle = () => {
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
    SetThumbLikeColor(!thumbLikeColor);
  };

  const [userId, setUserId] = useState("");
  const commentsUrl = `/v1/posts/user-comments/${userId}`;

  // create random id for comment
  function generateRandomId() {
    const timestamp = Math.floor(Date.now() / 1000)
      .toString(16)
      .padStart(8, "0");

    const machine = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");

    const process = Math.floor(Math.random() * 0xffff)
      .toString(16)
      .padStart(4, "0");

    const counter = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");

    const id = `${timestamp}${machine}${process}${counter}`;
    return id;
  }
  const commentId = generateRandomId();

  // handle all comments
  const handleUserAllComments = (event) => {
    event.preventDefault();

    const form = event.target;
    const userPrimaryComments = form.userPrimaryComments.value;
    const demo = form.demo;

    console.log("demo", demo);

    // create time
    const createdAt = new Date();
    const createdAtString = createdAt.toISOString();

    const userCommentsInfo = {
      firstComments: userPrimaryComments,
      createdAt: createdAtString,
      _id: commentId,
    };

    fetch(commentsUrl, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userCommentsInfo),
    });
    form.reset();
  };

  // handle user all comments
  const handleUserComments = (id) => {
    setUserId(id);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        {isLoading && <Spinner />}
        {/* post top */}
        <div className="post-top">
          <div className="post-top-left">
            <div className="poster-title-img">
              <img
                src={
                  user?.profilePicture
                    ? user?.profilePicture
                    : placeholderProfile
                }
                alt="post-profile"
                className="post-top-profile"
              />
              <div>
                <span className="user-post-name">{`${user?.firstName} ${user?.middleName} ${user?.lastName}`}</span>
                <span className="user-post-date">
                  {format(createdAt)} <Public className="post-public-icon" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="post-top-right">
            <IconButton color="green" aria-label="add to shopping cart">
              <MoreVert />
            </IconButton>
          </div>
        </div>

        {/* recent all post */}
        {/* post center */}
        <div className="post-center">
          <p className="user-post-paragraph">{description}</p>
          <div className="user-post-images">
            <img src={postImages[0]} alt="" className="post-image" />
          </div>
        </div>

        {/* post bottom */}
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className="like-icon" src="/assets/like.png" alt="like" />
            <img className="like-icon" src="/assets/heart.png" alt="heart" />
            <span className="post-like-counter">
              {liked?.length < 1 ? 0 : liked}
            </span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comments">
              {comments?.length && comments?.length < 2
                ? comments?.length < 1
                  ? "0 Comment"
                  : "1 Comment"
                : comments?.length + " Comments"}
            </span>
          </div>
        </div>

        <hr className="like-comment-hr" />

        <form onSubmit={handleUserAllComments}>
          {/* like comment handler */}
          <div className="like-comment-handler">
            <div
              className={
                thumbLikeColor ? `like-handler liked-color` : `like-handler`
              }
              onClick={likeHandle}
            >
              <ThumbUp className="like-thumb-icon" />
              <span className="like-thumb-text">Like</span>
            </div>
            <label
              htmlFor={`comment-${_id}`}
              className="comment-handler"
              onClick={() => handleUserComments(_id)}
            >
              <Textsms className="comment-icon" />
              <span className="comment-text">Comment</span>
            </label>
          </div>

          {/* comment box */}
          <div className="comment-box">
            <div className="comment-image">
              <img
                src={
                  user?.profilePicture
                    ? user?.profilePicture
                    : placeholderProfile
                }
                alt="post-profile"
                className="post-top-profile"
              />
            </div>
            <div
              className={`comment-box-emoji ${
                isPickerVisible ? "d-block" : "d-none"
              }`}
            >
              <Picker
                data={data}
                previewPosition="none"
                onEmojiSelect={(e) => {
                  setCurrentEmoji(e.native);
                  setPickerVisible(!isPickerVisible);
                }}
              ></Picker>
            </div>
            <input
              onClick={() => handleUserComments(_id)}
              type="text"
              id={`comment-${_id}`}
              placeholder="Write a comment..."
              required
              name="userPrimaryComments"
              value={currentEmoji}
              onChange={handleChange}
            />
            <EmojiEmotions
              sx={{ cursor: "pointer" }}
              onClick={() => setPickerVisible(!isPickerVisible)}
            />
          </div>

          {/* recent comment */}
          <div className="recent-comment-wrap">
            {comments?.length === 0 ||
              comments?.map((comment) => (
                <div className="recent-comment-wrap" key={comment?._id}>
                  {/* {console.log(comment?._id)} */}
                  <div className="recent-comments">
                    <div className="comment-image">
                      <img
                        src="/assets/person/1.jpeg"
                        alt="post-profile"
                        className="post-top-profile"
                      />
                    </div>
                    <span className="comment-user-title">
                      Katrina Turquotte
                    </span>
                  </div>
                  {/* actual comment */}
                  <article className="actual-comment">
                    <p>{comment?.firstComments}</p>

                    {/* ----------------user reply----------------- */}

                    {/* user reply */}
                    <div className="comment-reply-wrap">
                      <div className="comment-reply">
                        <span>Like</span>
                        <label htmlFor="handleUserReply">Reply</label>
                        <Typography
                          variant="span"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Public
                            sx={{ fontSize: "13px", marginRight: "3px" }}
                          />{" "}
                          {format(comment?.createdAt)}
                        </Typography>
                      </div>

                      {/* reply like */}
                      <Typography
                        variant="span"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ThumbUp
                          sx={{ fontSize: "13px", marginRight: "5px" }}
                        />{" "}
                        5
                      </Typography>
                    </div>
                  </article>

                  {/* *
                  =========================== 
                  REPLY COMMENT BUT UNFORTUNATELY I
                  CAN NOT HANDLE IT AT THE MOMENT AND I WANT TO HANDLE IT AFTER
                  SOME WORKED FINISH.
                  ==================
                */}
                  {/* user second time reply / nested comment */}
                  {/* <div className="second-time-reply">
                    <div className="recent-comments">
                      <div className="comment-image">
                        <img
                          src="/assets/person/1.jpeg"
                          alt="post-profile"
                          className="post-top-profile"
                        />
                      </div>
                      <span className="comment-user-title">
                        Katrina Turquotte
                      </span>
                    </div> */}
                  {/* <article> */}
                  {/* <p>Wow congratulations</p> */}
                  {/* user reply */}
                  {/* <div className="comment-reply-wrap">
                        <div className="comment-reply">
                          <span>Like</span>
                          <label
                            htmlFor="handleUserReply"
                            onClick={handleUserReply}
                          >
                            Reply
                          </label>
                          <Typography
                            variant="span"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Public
                              sx={{ fontSize: "13px", marginRight: "3px" }}
                            />{" "}
                            just now
                          </Typography>
                        </div> */}
                  {/* reply like */}
                  {/* <Typography
                          variant="span"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <ThumbUp
                            sx={{ fontSize: "13px", marginRight: "5px" }}
                          />{" "}
                          2
                        </Typography>
                      </div>
                    </article> */}
                  {/*--------------------user reply comment-------------------- */}
                  {/* <>
                      <div className="reply-comment-box">
                        <div className="comment-image">
                          <img
                            src="/assets/person/1.jpeg"
                            alt="post-profile"
                            className="post-top-profile"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Write a reply..."
                          name="userSecondaryComments"
                          required
                        />
                        <EmojiEmotions sx={{ cursor: "pointer" }} />
                      </div>
                    </> */}
                  {/* </div> */}
                </div>
              ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
