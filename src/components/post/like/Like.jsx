import React from "react";

const LikePage = ({ liked, like, totalLike }) => {
  //   console.log("totalLike", totalLike[0].length);
  return (
    <>
      <div className="post-bottom-left">
        {/* {totalLike?.length ? parseInt(totalLike?.length) : 0} */}
        {totalLike}

        <span className="post-like-counter">
          {liked?.length < 1 ? 0 : liked}
        </span>
      </div>
    </>
  );
};

export default LikePage;
