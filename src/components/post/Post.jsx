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
import "./Post.css";

const Post = ({ post }) => {
  // const { desc, img, likes, comment, date, userId, user } = post;
  const { id, desc, photo, date, like, comment, username, profilePicture } =
    post;
  const placeholderProfile =
    "https://i.ibb.co/LY4tvxP/pngfind-com-placeholder-png-6104451.png";

  const [liked, setLiked] = useState(like);
  const [isLiked, setIsLiked] = useState(false);
  const [thumbLikeColor, SetThumbLikeColor] = useState(false);
  const [userComments, setUserComments] = useState(false);
  const [userSecondReply, setUserSecondReply] = useState(false);

  const [userData, setUserData] = useState({});

  const likeHandle = () => {
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
    SetThumbLikeColor(!thumbLikeColor);
  };

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const res = await axios.get(`/users?userId=${userId}`);
  //     setUserData(res?.data);
  //   };
  //   fetchUserData();
  // }, [userId]);

  const handleUserReply = () => {
    setUserComments(!userComments);
  };
  const handleUserSecondTimeReply = () => {
    setUserComments(!setUserSecondReply);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        {/* post top */}
        <div className="post-top">
          <div className="post-top-left">
            <div className="poster-title-img">
              <img
                src={profilePicture}
                alt="post-profile"
                className="post-top-profile"
              />
              <div>
                <span className="user-post-name">{username && username}</span>
                <span className="user-post-date">
                  {format(userData?.createdAt)}{" "}
                  <Public className="post-public-icon" />{" "}
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

        {/* post center */}
        <div className="post-center">
          <p className="user-post-paragraph">{desc}</p>
          <img src={photo} alt="" className="post-image" />
        </div>

        {/* post bottom */}
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className="like-icon" src="/assets/like.png" alt="like" />
            <img className="like-icon" src="/assets/heart.png" alt="heart" />
            <span className="post-like-counter">{liked}</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comments">
              {comment} {comment <= 1 ? " Comment" : " Comments"}
            </span>
          </div>
        </div>

        <hr className="like-comment-hr" />

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
          <label htmlFor={`comment-${id}`} className="comment-handler">
            <Textsms className="comment-icon" />
            <span className="comment-text">Comment</span>
          </label>
        </div>

        {/* comment box */}
        <div className="comment-box">
          <div className="comment-image">
            <img
              src="/assets/person/1.jpeg"
              alt="post-profile"
              className="post-top-profile"
            />
          </div>
          <input
            type="text"
            id={`comment-${id}`}
            placeholder="Write a comment..."
          />
          <EmojiEmotions sx={{ cursor: "pointer" }} />
        </div>

        {/* recent comment */}
        <div className="recent-comment-wrap">
          <div className="recent-comments">
            <div className="comment-image">
              <img
                src="/assets/person/1.jpeg"
                alt="post-profile"
                className="post-top-profile"
              />
            </div>
            <span className="comment-user-title">Katrina Turquotte</span>
          </div>

          {/* actual comment */}
          <article className="actual-comment">
            <p>
              Ekjoner certificate e deklam medal er motn golden ekta logo dewa
              achievement likhatar pashe,,but amrtate kheyal korlam jinish ta
              nei,,etar karon ta ki??
            </p>
            {/* reply */}
            <div className="comment-reply-wrap">
              <div className="comment-reply">
                <span>Like</span>
                <span onClick={handleUserReply}>Reply</span>
                <Typography
                  variant="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Public sx={{ fontSize: "13px", marginRight: "3px" }} /> 2m
                  ago
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
                <ThumbUp sx={{ fontSize: "13px", marginRight: "5px" }} /> 5
              </Typography>
            </div>
          </article>

          {/* user second time reply */}
          <div className="second-time-reply">
            <div className="recent-comments">
              <div className="comment-image">
                <img
                  src="/assets/person/1.jpeg"
                  alt="post-profile"
                  className="post-top-profile"
                />
              </div>
              <span className="comment-user-title">Katrina Turquotte</span>
            </div>
            <article>
              <p>Wow congratulations</p>
              {/* reply */}
              <div className="comment-reply-wrap">
                <div className="comment-reply">
                  <span>Like</span>
                  <span onClick={handleUserReply}>Reply</span>
                  <Typography
                    variant="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Public sx={{ fontSize: "13px", marginRight: "3px" }} />{" "}
                    just now
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
                  <ThumbUp sx={{ fontSize: "13px", marginRight: "5px" }} /> 2
                </Typography>
              </div>
            </article>
            {userComments ? (
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
                  id={`comment-${id}`}
                  placeholder="Write a reply..."
                />
                <EmojiEmotions sx={{ cursor: "pointer" }} />
              </div>
            ) : undefined}
          </div>

          {/* actual comment */}
          <div className="recent-comments">
            <div className="comment-image">
              <img
                src="/assets/person/1.jpeg"
                alt="post-profile"
                className="post-top-profile"
              />
            </div>
            <span className="comment-user-title">Katrina Turquotte</span>
          </div>
          <article className="actual-comment">
            <p>
              eder mail ei problem Bhai. Shudu Apni na. Amra onekei oder mail
              korle mail jayna.
            </p>
            {/* reply */}
            <div className="comment-reply-wrap">
              <div className="comment-reply">
                <span>Like</span>
                <span>Reply</span>
                <Typography
                  variant="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Public sx={{ fontSize: "13px", marginRight: "3px" }} /> just
                  now
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
                <ThumbUp sx={{ fontSize: "13px", marginRight: "5px" }} /> 2
              </Typography>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Post;
