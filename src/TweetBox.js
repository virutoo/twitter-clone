import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";
import { useState } from "react";
import { db, addDoc, collection } from "./firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "Gintama",
      username: "gintoki",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://cdn.myanimelist.net/s/common/uploaded_files/1442605158-6b9757f9f77a962062083fe66f7b45d3.jpeg",
      image: tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.myanimelist.net/s/common/uploaded_files/1442605158-6b9757f9f77a962062083fe66f7b45d3.jpeg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
