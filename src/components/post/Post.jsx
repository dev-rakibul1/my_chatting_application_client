import { MoreVert, Public, Textsms, ThumbUp } from "@mui/icons-material";
import { useState } from "react";
import { Users } from "../../dummyData";
import "./Post.css";

const Post = ({ post }) => {
  const { desc, photo, like, comment, date, userId } = post;

  const [liked, setLiked] = useState(like);
  const [isLiked, setIsLiked] = useState(false);
  const [thumbLikeColor, SetThumbLikeColor] = useState(false);

  const likeHandle = () => {
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
    SetThumbLikeColor(!thumbLikeColor);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        {/* post top */}
        <div className="post-top">
          <div className="post-top-left">
            <div className="poster-title-img">
              <img
                src={
                  Users.filter((user) => user.id === userId)[0].profilePicture
                }
                alt="post-profile"
                className="post-top-profile"
              />
              <div>
                <span className="user-post-name">
                  {Users.filter((user) => user.id === userId)[0].username}
                </span>
                <span className="user-post-date">
                  {date} <Public className="post-public-icon" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>

        {/* post center */}
        <div className="post-center">
          <p className="user-post-paragraph">{desc}</p>
          <img src={photo} alt="post" className="post-image" />
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
          <div className="comment-handler">
            <Textsms className="comment-icon" />
            <span className="comment-text">Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
