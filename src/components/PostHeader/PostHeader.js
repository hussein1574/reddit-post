import OptionsCard from "../OptionsCard/OptionsCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import RedditCard from "../RedditCard/RedditCard";
import "./PostHeader.scss";

export default function PostHeader() {
  return (
    <div className="post-header">
      <div className="post-header--left">
        <img
          src="https://styles.redditmedia.com/t5_2qh22/styles/communityIcon_5z6p47idri9a1.png"
          alt="Reddit icon"
          className="post-header__profile-pic"
        />
        <p>
          <a className="post-header__reddit" href="#">
            r/anime
          </a>
          <span className="post-header__date"> • 3 mo. ago</span>
        </p>
        <a className="post-header__username" href="#">
          Turbostrider27
        </a>
        {/* <ProfileCard /> */}
        {/* <RedditCard /> */}
      </div>
      <div className="post-header--right">
        <button className="post-header__btn">Join</button>
        <button className="post-header__options">•••</button>
        {/* <OptionsCard /> */}
      </div>
    </div>
  );
}
