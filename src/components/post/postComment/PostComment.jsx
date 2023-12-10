import { Public, ThumbUp } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useRef } from "react";
import { format } from "timeago.js";
import {
  useGetReplyCommentQuery,
  useReplyCommentMutation,
} from "../../../redux/postApi/postApiSlice";
import SmallSpinner from "../../../shared/spinner/smallSpinner";

const PostComment = ({ comment, user }) => {
  const replyComment = useRef();
  const { _id } = comment;

  //   console.log(_id);

  const { isLoading: isGetReplyCommentLoading, data: commentReplyData } =
    useGetReplyCommentQuery(_id, {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    });

  // reply comment
  const [postReplyComment, { isLoading: isReplyCommentLoading }] =
    useReplyCommentMutation({
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    });

  // console.log(commentReplyData);

  // Function to handle Enter key press
  const handleReplyComment = (event) => {
    if (event.key === "Enter") {
      const nameValue = replyComment.current.value;
      if (nameValue === "") {
        return;
      } else {
        const replyCommentPayload = {
          replyComment: nameValue,
          post: _id,
          user: user?._id,
          comment: comment?._id,
        };
        postReplyComment(replyCommentPayload);

        // Clear the input field
        replyComment.current.value = "";
      }

      event.preventDefault();
    }
  };

  return (
    <>
      <div className="recent-comment-wrap">
        <div className="recent-comment-wrap">
          {/* {console.log(comment?._id)} */}
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
            <p>{comment?.comment}</p>

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
                  <Public sx={{ fontSize: "13px", marginRight: "3px" }} />{" "}
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
                <ThumbUp sx={{ fontSize: "13px", marginRight: "5px" }} /> 5
              </Typography>
            </div>
          </article>

          {/* Reply comment */}
          <div className="" style={{ margin: "10px 0" }}>
            {commentReplyData?.data?.map((reply) => (
              <div
                className=""
                style={{
                  paddingLeft: "19px",
                  marginLeft: "35px",
                  borderLeft: "2px solid green",
                }}
              >
                <div
                  className=""
                  style={{
                    paddingTop: "10px",
                  }}
                >
                  <span style={{ fontSize: "14px", marginTop: "15px" }}>
                    {reply.replyComment}
                  </span>

                  <div className="comment-reply">
                    <span>Like</span>
                    <label
                      htmlFor={_id}
                      // onClick={handleUserReply}
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
                      <Public sx={{ fontSize: "13px", marginRight: "3px" }} />{" "}
                      {format(reply?.createdAt)}
                    </Typography>
                  </div>
                  {/* reply like */}
                  {/* <Typography
                variant="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ThumbUp sx={{ fontSize: "13px", marginRight: "5px" }} /> 2
              </Typography> */}
                </div>
              </div>
            ))}
          </div>

          {/*--------------------user reply comment-------------------- */}

          <>
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
                id={_id}
                ref={replyComment}
                onKeyDown={handleReplyComment}
              />
              {isGetReplyCommentLoading && <SmallSpinner />}
              {isReplyCommentLoading && <SmallSpinner />}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default PostComment;
