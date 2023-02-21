import { Button } from "@mui/material";
import React from "react";
import "./Birthday.css";
const birthdayCover = "https://i.ibb.co/Yt2zryp/birthday-cover.jpg";

const Birthday = () => {
  return (
    <section className="birthday-main">
      <div className="birthday-wrap">
        {/* birthday cover image */}
        <div className="birthday-cover-image">
          <img
            src={birthdayCover}
            alt="birthday-cover"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* wish your best friend in her birthday */}
        <div className="birthday-friend-wish">
          {/* friend 01 */}
          <h2 className="birthday-wish-title">Wish your friend on birthday!</h2>
          <article>
            <div className="birthday-article">
              <div className="birthday-friend-list">
                <div className="birthday-friend-image">
                  <img
                    src="/assets/person/1.jpeg"
                    alt="friend"
                    className="birthday-friend"
                  />
                </div>
                <div>
                  <span className="birthday-friend-title">
                    Katrina Turquotte
                  </span>
                  <p>Happy birthday</p>
                </div>
              </div>
              <label htmlFor="birthday-message">Send Message</label>
            </div>
            <form className="wish-message-box">
              <textarea
                name=""
                id="birthday-message"
                cols="30"
                rows="5"
                className="wish-message-box"
                placeholder="Wish your friend..."
                required
              ></textarea>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                sx={{ mt: 2, display: "inline-block" }}
              >
                Submit
              </Button>
            </form>
          </article>

          {/* friend 02 */}
          <article>
            <div className="birthday-article">
              <div className="birthday-friend-list">
                <div className="birthday-friend-image">
                  <img
                    src="/assets/person/1.jpeg"
                    alt="friend"
                    className="birthday-friend"
                  />
                </div>
                <div>
                  <span className="birthday-friend-title">
                    Katrina Turquotte
                  </span>
                  <p>Happy birthday</p>
                </div>
              </div>
              <label htmlFor="birthday-message-2">Send Message</label>
            </div>
            <form className="wish-message-box">
              <textarea
                name=""
                id="birthday-message-2"
                cols="30"
                rows="5"
                className="wish-message-box"
                placeholder="Wish your friend..."
                required
              ></textarea>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                sx={{ mt: 2, display: "inline-block" }}
              >
                Submit
              </Button>
            </form>
          </article>

          {/* friend 03 */}
          <article>
            <div className="birthday-article">
              <div className="birthday-friend-list">
                <div className="birthday-friend-image">
                  <img
                    src="/assets/person/1.jpeg"
                    alt="friend"
                    className="birthday-friend"
                  />
                </div>
                <div>
                  <span className="birthday-friend-title">
                    Katrina Turquotte
                  </span>
                  <p>Happy birthday</p>
                </div>
              </div>
              <label htmlFor="birthday-message-3">Send Message</label>
            </div>
            <form className="wish-message-box">
              <textarea
                name=""
                id="birthday-message-3"
                cols="30"
                rows="5"
                className="wish-message-box"
                placeholder="Wish your friend..."
                required
              ></textarea>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                sx={{ mt: 2, display: "inline-block" }}
              >
                Submit
              </Button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Birthday;
