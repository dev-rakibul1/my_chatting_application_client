import { useQuery } from "@tanstack/react-query";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

const Feed = ({ username }) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  // const fetchUserPost = async () => {
  //   const res = await axios.get(`http://localhost:1000/api/v1/posts`);
  //   setPosts(res?.data);
  // };
  // fetchUserPost();

  //   fetch("/v1/posts/")
  //     .then((res) => res.json())
  //     .then((posts) => console.log(posts))
  //     .catch((error) => console.log(error.message));
  // }, []);

  // console.log(posts);

  // const {
  //   isLoading,
  //   isError,
  //   data: postss,
  //   error,
  // } = useQuery({
  //   queryKey: ["postss"],
  //   queryFn: async () => {
  //     const res = await fetch("/v1/posts/");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("/v1/posts/");
      const data = await res.json();
      return data;
    },
  });

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
        {posts.post?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
