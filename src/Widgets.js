import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer" />
      <h2>What's happening</h2>

      <TwitterTweetEmbed tweetId="1844364761003340068" />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Gintama"
        options={{ height: 400 }}
      />

      <TwitterShareButton
        url=""
        options={{ text: "gintokiii", via: "@gintama" }}
      />
    </div>
  );
};

export default Widgets;
