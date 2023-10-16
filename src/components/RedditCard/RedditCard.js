import "./RedditCard.scss";
export default function RedditCard() {
  return (
    <div className="reddit-card">
      <div className="reddit-card__info">
        <div className="reddit-card__info--data">
          <img
            src="https://styles.redditmedia.com/t5_2qh22/styles/communityIcon_5z6p47idri9a1.png"
            alt="Reddit icon"
            className="reddit-card__profile-pic"
          />
          <p>
            <a className="link-heading" href="#">
              r/anime
            </a>
          </p>
        </div>
        <button className="reddit-card__info--btn">Join</button>
      </div>
      <p className="reddit-card__text">Reddit's premier anime community.</p>
      <div className="stats-grid">
        <span className="stats-grid--number">8.2M</span>
        <span className="stats-grid--number">6.2K</span>
        <span className="stats-grid--type">Members</span>
        <span className="stats-grid--type">🟢 Online</span>
      </div>
    </div>
  );
}
