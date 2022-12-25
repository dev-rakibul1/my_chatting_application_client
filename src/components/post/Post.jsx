import { MoreVert, Public } from "@mui/icons-material";
import { Users } from "../../dummyData";
import "./Post.css";

const Post = ({ post }) => {
  const { desc, photo, like, comment, date, userId } = post;

  // const userData = Users.filter((user) => user.id === 1);
  // console.log(userData[0].username);

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
            <span className="post-like-counter">{like}</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comments">
              {comment} {comment <= 1 ? " Comment" : " Comments"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
