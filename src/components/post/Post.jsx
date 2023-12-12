import { Public, Textsms, ThumbUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRef } from "react";
import { format } from "timeago.js";

import {
  useGetCommentQuery,
  useGetLikeQuery,
  useGiveLikeMutation,
  usePostCommentMutation,
  useRemoveLikeMutation,
} from "../../redux/api/postApiSlice";
import Spinner from "../../shared/spinner/Spinner";
import SmallSpinner from "../../shared/spinner/smallSpinner";
import { checkCurrentUser } from "../../utils/utils";
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
    postLikes,
    likes,
    _id,
    createdAt,
    user,
  } = post;

  // console.log("Post likes::", user);
  const comment = useRef();
  // const currentUser = postLikes.map((isUserId) => isUserId === user?._id);

  const currentUser = checkCurrentUser(postLikes, user?._id);

  // console.log("current user", currentUser);
  // console.log("login user", user?._id);

  // Get, POST method form Redux
  const [postComment, { isLoading: isCommentLoading }] = usePostCommentMutation(
    { refetchOnMountOrArgChange: true, pollingInterval: 30000 }
  );

  const [likeSend, { isLoading: isLikeLoading }] = useGiveLikeMutation({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const { isLoading: isGetCommentLoading, data: commentData } =
    useGetCommentQuery(_id, {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    });

  const { isLoading: isGetLike, data: likeData } = useGetLikeQuery(_id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [likeRemove, { isLoading: isLikeRemoveLoading }] =
    useRemoveLikeMutation({
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    });

  // console.log("commentData", commentData);

  const replyCommentLength = parseInt(commentData?.data?.length);

  const handleLikeSend = () => {
    const likeSendPayload = {
      like: 1,
      post: _id,
      user: user?._id,
    };

    likeSend(likeSendPayload);
  };

  const handleLikedRemove = () => {
    const likeRemovePayload = {
      post: _id,
      user: user?._id,
    };
    likeRemove(likeRemovePayload);
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

  // console.log(likeData);

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
          <div className="post-bottom">
            <img className="like-icon" src="/assets/like.png" alt="like" />
            {post.postLikes.length}
            {/* <img className="like-icon" src="/assets/heart.png" alt="heart" /> */}
            {/* {likeData?.data?.map((like) => (
              <LikePage
                totalLike={post.postLikes.length}
                like={like}
                key={like?._id}
              />
            ))} */}
          </div>
          <div className="post-bottom-right">
            <span className="post-comments">
              {comments?.length <= 1
                ? comments?.length + " Comment"
                : comments?.length + replyCommentLength + " Comments"}
            </span>
          </div>
        </div>

        <hr className="like-comment-hr" />

        {/* like comment handler */}
        <div className="like-comment-handler">
          {currentUser[0] ? (
            <>
              {" "}
              <div
                className={`like-handler ${currentUser[0] ? "liked-text" : ""}`}
                onClick={handleLikedRemove}
              >
                <ThumbUp className="like-thumb-icon" />
                <span className={`like-thumb-text`}>
                  {currentUser[0] && "Liked"}
                </span>
              </div>
            </>
          ) : (
            <>
              <div
                className={`like-handler ${currentUser[0] ? "liked-text" : ""}`}
                onClick={handleLikeSend}
              >
                <ThumbUp className="like-thumb-icon" />
                <span className={`like-thumb-text`}>
                  {!currentUser[0] && "Like"}
                </span>
              </div>
            </>
          )}
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
          // className={`comment-box-emoji ${
          //   isPickerVisible ? "d-block" : "d-none"
          // }`}
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
