import React from "react";
import Feed from "../../components/feed/Feed";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Feed username="john" />
      </div>
    </>
  );
};

export default Home;
