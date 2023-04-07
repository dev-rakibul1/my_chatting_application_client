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
  // const { id, desc, photo, date, like, comment, username, profilePicture } =
  //   post;
  const { description, image, comments, likes, _id, createdAt } = post;
  console.log(comments);

  const placeholderProfile =
    "https://i.ibb.co/LY4tvxP/pngfind-com-placeholder-png-6104451.png";

  const [liked, setLiked] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [thumbLikeColor, SetThumbLikeColor] = useState(false);
  const [userComments, setUserComments] = useState(false);
  const [userSecondReply, setUserSecondReply] = useState(false);

  const [userPost, setUserPost] = useState({});

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

  // axios
  //   .get("http://localhost:1000/api/v1/posts")
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  const [userId, setUserId] = useState("");
  const commentsUrl = `http://localhost:1000/api/v1/posts/user-comments/${userId}`;

  // console.log(userId);
  // console.log(commentsUrl);

  const handleUserAllComments = (event) => {
    event.preventDefault();

    const form = event.target;
    const userPrimaryComments = form.userPrimaryComments.value;
    // const userSecondaryComments = form.userSecondaryComments.value;

    // create time
    const createdAt = new Date();
    const createdAtString = createdAt.toISOString();

    const userCommentsInfo = {
      firstComments: userPrimaryComments,
      createdAt: createdAtString,
      // secondComment: userSecondaryComments,
    };

    fetch(commentsUrl, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userCommentsInfo),
    });

    // axios
    //   .patch(`http://localhost:1000/api/v1/posts/${userId}`, {
    //     userCommentsInfo,
    //   })

    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    form.reset();
  };

  // handle user all comments
  const handleUserComments = (id) => {
    setUserId(id);
  };

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
                src={placeholderProfile}
                alt="post-profile"
                className="post-top-profile"
              />
              <div>
                <span className="user-post-name">John Doe</span>
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
          <img src={image} alt="" className="post-image" />
        </div>

        {/* post bottom */}
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className="like-icon" src="/assets/like.png" alt="like" />
            <img className="like-icon" src="/assets/heart.png" alt="heart" />
            <span className="post-like-counter">
              {!liked.length < 1 ? 0 : liked}
            </span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comments">
              {comments.length && comments.length < 2
                ? comments.length < 1
                  ? "0 Comment"
                  : "1 Comment"
                : comments.length + " Comments"}
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
                src="/assets/person/1.jpeg"
                alt="post-profile"
                className="post-top-profile"
              />
            </div>
            <input
              onClick={() => handleUserComments(_id)}
              type="text"
              id={`comment-${_id}`}
              placeholder="Write a comment..."
              required
              name="userPrimaryComments"
            />
            <EmojiEmotions sx={{ cursor: "pointer" }} />
          </div>

          {/* recent comment */}
          <div className="recent-comment-wrap">
            {comments.length === 0 ||
              comments?.map((comment, i) => (
                <div className="recent-comment-wrap" key={i}>
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
                    {/* reply */}
                    <div className="comment-reply-wrap">
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
                </div>
              ))}

            {/* user second time reply / nested comment */}
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
                    <label htmlFor="handleUserReply" onClick={handleUserReply}>
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
                    id={`handleUserReply`}
                    placeholder="Write a reply..."
                    name="userSecondaryComments"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
