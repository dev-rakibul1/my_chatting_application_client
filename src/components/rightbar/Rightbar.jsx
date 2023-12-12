import { Add, MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "../../redux/api/userApiSlice";
import Online from "../online/Online";
import "./Rightbar.css";

const Rightbar = () => {
  const { data, isLoading } = useGetUserQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  console.log(isLoading);
  console.log("User data", data);

  return (
    <div className="rightbar">
      <div className="right-bar-wrapper">
        <div className="right-bar-birthday-wrap">
          <h4 className="right-bar-birthday-title">Birthdays</h4>
          <Link to="/birthday">
            <div className="birthday-container">
              <img src="/assets/gift.png" alt="" className="birthday-image" />
              <span className="birthday-text">
                <strong>Alina</strong> and 3 other people birthday today.
              </span>
            </div>
          </Link>
        </div>

        {/* active friend */}
        <hr className="right-bar-hr" />
        <div className="right-bar-active-friend-wrapper">
          <h4 className="right-bar-active-title">Active friends</h4>
          <h4>
            <MoreVert className="right-active-bar-icons" />
          </h4>
        </div>
        {!data?.data.length ? (
          "No active friends"
        ) : (
          <ul className="right-bar-friend-list">
            {/* active friend 01 */}
            {data?.data?.map((user) => (
              <Online key={user?.id} isLoading={isLoading} online={user} />
            ))}
          </ul>
        )}
        <hr className="right-bar-hr" />

        {/* group conversations */}
        <h4 className="right-bar-active-title">Group conversations</h4>
        <ul className="right-bar-friend-list">
          {/* group conversations 01 */}
          <li className="right-bar-friend">
            <div className="right-bar-profile-fn-img">
              <img
                src="/assets/person/8.jpeg"
                className="right-bar-fn-img"
                alt="active friend"
              />
            </div>
            <div className="right-bar-username">
              International Remote Jobs for CSE, EEE and IT Students
            </div>
          </li>

          {/* group conversations 02 */}
          <li className="right-bar-friend">
            <div className="right-bar-profile-fn-img">
              <img
                src="/assets/person/7.jpeg"
                className="right-bar-fn-img"
                alt="active friend"
              />
            </div>
            <div className="right-bar-username">English Spoken</div>
          </li>

          <li className="right-bar-create-new-group">
            <Add className="create-new-group-icon" />{" "}
            <span className="create-new-group-text">
              Create new conversations
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
