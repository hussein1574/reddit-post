import { useState } from "react";
import OptionsCard from "../OptionsCard/OptionsCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import RedditCard from "../RedditCard/RedditCard";
import "./PostHeader.scss";

export default function PostHeader() {
  const [profileCardActive, setProfileCardActive] = useState(false);
  const [redditCardActive, setRedditCardActive] = useState(false);
  const [optionsCardActive, setOptionsCardActive] = useState(false);
  return (
    <div className="post-header">
      <div className="post-header--left">
        <img
          src="https://styles.redditmedia.com/t5_2qh22/styles/communityIcon_5z6p47idri9a1.png"
          alt="Reddit icon"
          className="post-header__profile-pic"
        />
        <p>
          <a
            className="post-header__reddit"
            href="#"
            onMouseEnter={() => setRedditCardActive(true)}
            onMouseLeave={() => setRedditCardActive(false)}
          >
            r/anime
            {redditCardActive && <RedditCard />}
          </a>
          <span className="post-header__date"> • 3 mo. ago</span>
        </p>
        <a
          className="post-header__username"
          href="#"
          onMouseEnter={() => setProfileCardActive(true)}
          onMouseLeave={() => setProfileCardActive(false)}
        >
          Turbostrider27
          {profileCardActive && <ProfileCard />}
        </a>
      </div>
      <div className="post-header--right">
        <button className="post-header__btn">Join</button>
        <button
          className="post-header__options"
          onClick={() => setOptionsCardActive((curState) => !curState)}
        >
          •••
        </button>
        {optionsCardActive && <OptionsCard />}
      </div>
    </div>
  );
}
