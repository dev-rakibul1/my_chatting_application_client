import React from "react";
import ProfileTabs from "../../components/profileTabs/ProfileTabs";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/TopBar";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="user-cover-photo-wrap">
              <img
                src="/assets/cover.jpg"
                alt="user-cover"
                className="user-cover-photo"
              />
              <div className="user-wrap">
                {/* user */}
                <div className="user">
                  <img
                    src="/assets/person/1.jpeg"
                    alt="user"
                    className="user-img"
                  />

                  <div className="user-info">
                    <h1 className="user-title">
                      Katrin <span>(Katrina Turquotte)</span>
                    </h1>
                    <span>1.7K Friends</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* profile-tabs */}
          <div className="profile-tabs">
            <ProfileTabs />
          </div>
          <hr />
          <div className="profile-right-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
