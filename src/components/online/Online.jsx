import { Typography } from "@mui/material";
import Spinner from "../../shared/spinner/Spinner";
import "./Online.css";

const Online = ({ online, isLoading }) => {
  const { profilePicture, firstName, lastName, middleName } = online;
  return (
    <>
      <li className="right-bar-friend">
        <div className="right-bar-profile-fn-img">
          {isLoading && <Spinner />}
          <img
            src={profilePicture}
            className="right-bar-fn-img"
            alt="active friend"
          />
          <div className="right-bar-online"></div>
        </div>
        <div className="right-bar-username">
          <h4>{`${firstName} ${middleName} ${lastName}`}</h4>
          <Typography
            variant="small"
            sx={{ fontSize: "12px", fontWeight: 300 }}
          >
            Active Now
          </Typography>
        </div>
      </li>
    </>
  );
};

export default Online;
