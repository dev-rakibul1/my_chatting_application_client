import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
