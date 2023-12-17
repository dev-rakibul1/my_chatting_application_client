import { Box } from "@mui/material";
import { useState } from "react";
import { useGetPostApiQuery } from "../../redux/api/postApiSlice";
import Spinner from "../../shared/spinner/Spinner";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

const Feed = () => {
  const [page, setPage] = useState(null);
  const [limit, setLimit] = useState(null);

  const { data, isLoading } = useGetPostApiQuery({
    // page,
    // limit,
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  // useEffect(() => {
  //   if (data?.meta) {
  //     setPage(data.meta.page);
  //     setLimit(data.meta.limit);
  //   }
  // }, [data?.meta]);

  // // Handle pagination page post load
  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     setPage((prevPage) => prevPage + 1);
  //     setLimit((limit) => limit + 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // console.log(page, limit, isLoading);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {data?.data?.map((post) => (
          <Post key={post._id} post={post} isLoading={isLoading} />
        ))}
      </div>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
          }}
        >
          <Spinner />
        </Box>
      )}
    </div>
  );
};

export default Feed;
