import { useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

import { Posts } from "../../dummyData";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPostData = async () => {
  //     const res = username
  //       ? await axios.get("posts/profile/" + username)
  //       : await axios.get("posts/timeline/63a5fbef2bb0c99ee78eb9b2");
  //     setPosts(res?.data);
  //   };
  //   fetchPostData();
  // }, [username]);

  // console.log(posts);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts?.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
