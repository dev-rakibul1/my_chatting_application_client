import { Public, Textsms, ThumbUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { format } from "timeago.js";
import {
  useGetCommentQuery,
  usePostCommentMutation,
} from "../../redux/postApi/postApiSlice";
import Spinner from "../../shared/spinner/Spinner";
import SmallSpinner from "../../shared/spinner/smallSpinner";
import PostLongMenu from "../postLongMenu/PostLongMenu";
import "./Post.css";
import PostComment from "./postComment/PostComment";
const placeholderProfile =
  "https://i.ibb.co/LY4tvxP/pngfind-com-placeholder-png-6104451.png";

const Post = ({ post, isLoading }) => {
  const {
    description,
    postComments: comments,
    postImages,
    likes,
    _id,
    createdAt,
    user,
  } = post;

  // console.log("Post page::", post);

  // All useEffect method
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [liked, setLiked] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [thumbLikeColor, SetThumbLikeColor] = useState(false);
  // const [commentId, setCommentId] = useState({});
  const comment = useRef();

  // Get, POST method form Redux
  const [postComment, { isLoading: isCommentLoading }] = usePostCommentMutation(
    { refetchOnMountOrArgChange: true, pollingInterval: 30000 }
  );

  const { isLoading: isGetCommentLoading, data: commentData } =
    useGetCommentQuery(_id, {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    });

  // User like handle
  const likeHandle = () => {
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
    SetThumbLikeColor(!thumbLikeColor);
  };

  // handle comment
  const handleComment = (event) => {
    if (event.key === "Enter") {
      const nameValue = comment.current.value;
      if (nameValue === "") {
        return;
      } else {
        // user comment payload
        const userCommentPayload = {
          comment: nameValue,
          post: _id,
          user: user?._id,
        };

        postComment(userCommentPayload);
        comment.current.value = "";
      }
      event.preventDefault();
    }
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
              <PostLongMenu />
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
              {comments?.length <= 1
                ? comments?.length + " Comment"
                : comments?.length + " Comments"}
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
          <label
            htmlFor={`comment-${_id}`}
            className="comment-handler"
            // onClick={() => handleUserComments(_id)}
          >
            <Textsms className="comment-icon" />
            <span className="comment-text">Comment</span>
          </label>
        </div>

        {/* comment box */}
        <div className="comment-box">
          {/* user comment profile pic */}
          <div className="comment-image">
            <img
              src={
                user?.profilePicture ? user?.profilePicture : placeholderProfile
              }
              alt="post-profile"
              className="post-top-profile"
            />
          </div>
          <div
            className={`comment-box-emoji ${
              isPickerVisible ? "d-block" : "d-none"
            }`}
          ></div>

          <input
            type="text"
            ref={comment}
            onKeyDown={handleComment}
            id={`comment-${_id}`}
            placeholder="Write a comment..."
            required
          />
          {isCommentLoading && <SmallSpinner />}
          {isGetCommentLoading && <SmallSpinner />}
        </div>

        {/* recent comment */}
        {commentData?.data?.length === 0 ||
          commentData?.data?.map((comment) => (
            <PostComment comment={comment} user={user} key={comment._id} />
          ))}
      </div>
    </div>
  );
};

export default Post;
