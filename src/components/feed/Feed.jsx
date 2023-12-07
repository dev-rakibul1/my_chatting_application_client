import { useGetPostApiQuery } from "../../redux/postApi/postApiSlice";
import Spinner from "../../shared/spinner/Spinner";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

const Feed = () => {
  const { data, error, isLoading } = useGetPostApiQuery();

  console.log(data);

  return (
    <div className="feed">
      {isLoading && <Spinner />}
      <div className="feed-wrapper">
        <Share />
        {data?.data?.map((post) => (
          <Post key={post._id} post={post} isLoading={isLoading} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
