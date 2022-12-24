import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./Share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        {/* share top */}
        <div className="share-top">
          <img
            src="/assets/person/1.jpeg"
            alt="share"
            className="share-profile-image"
          />
          <input
            type="text"
            placeholder="What's in your mind?"
            className="share-input"
          />
        </div>
        {/* hr */}
        <hr className="share-hr" />
        {/* share bottom */}
        <div className="share-bottom">
          <div className="share-options">
            {/* photo and video */}
            <div className="share-option">
              <PermMedia htmlColor="green" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
            </div>

            {/* Location */}
            <div className="share-option">
              <Room htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Location</span>
            </div>

            {/* Tags */}
            <div className="share-option">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Tags</span>
            </div>

            {/* Feelings */}
            <div className="share-option">
              <EmojiEmotions htmlColor="#FFD700" className="share-icon" />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
