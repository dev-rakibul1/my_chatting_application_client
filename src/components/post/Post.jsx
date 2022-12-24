import { MoreVert, Public } from "@mui/icons-material";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="post-wrapper">
        {/* post top */}
        <div className="post-top">
          <div className="post-top-left">
            <div className="poster-title-img">
              <img
                src="/assets/person/1.jpeg"
                alt="post-profile"
                className="post-top-profile"
              />
              <div>
                <span className="user-post-name">Karina</span>
                <span className="user-post-date">
                  20m ago <Public className="post-public-icon" />{" "}
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
          <p className="user-post-paragraph">
            Thanks for your feedback. I will be very excited about my feedback.
            I believe it helps me grow, and I achieved more knowledge and will
            apply again to your company. if you need a new employee in your
            company please select me or respond to me for the next job and I
            will be waiting for your next response. Take of care yourself.
            Thanks
          </p>
          <img src="/assets/post/1.jpeg" alt="post" className="post-image" />
        </div>

        {/* post bottom */}
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className="like-icon" src="/assets/like.png" alt="like" />
            <img className="like-icon" src="/assets/heart.png" alt="heart" />
            <span className="post-like-counter">31</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comments">17 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
