import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // const fetchUserPost = async () => {
    //   const res = await axios.get(`http://localhost:1000/api/v1/posts`);
    //   setPosts(res?.data);
    // };
    // fetchUserPost();

    fetch("/v1/posts/")
      .then((res) => res.json())
      .then((posts) => setPosts(posts.post))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(posts);

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
        {posts?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
