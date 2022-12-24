import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
