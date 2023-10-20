import { useState } from "react";
import "./PostButtons.scss";
import { Votes } from "../../utils/Enum";

export default function PostButtons({ comments }) {
  const [votes, setVotes] = useState(0);
  const [CurVote, setCurVote] = useState(Votes.NONE);

  function handleVote(voteType) {
    switch (voteType) {
      case "up":
        setCurVote((curVote) => {
          if (curVote === Votes.UP) {
            setVotes((curVotes) => curVotes - 1);
            return Votes.NONE;
          }
          if (curVote === Votes.DOWN) {
            setVotes((curVotes) => curVotes + 2);
          }
          if (curVote === Votes.NONE) {
            setVotes((curVotes) => curVotes + 1);
          }
          return Votes.UP;
        });
        break;
      case "down":
        setCurVote((curVote) => {
          if (curVote === Votes.DOWN) {
            setVotes((curVotes) => curVotes + 1);
            return Votes.NONE;
          }
          if (curVote === Votes.UP) {
            setVotes((curVotes) => curVotes - 2);
          }
          if (curVote === Votes.NONE) {
            setVotes((curVotes) => curVotes - 1);
          }
          return Votes.DOWN;
        });
        break;
      default:
        return Votes.NONE;
    }
  }
  return (
    <div className="buttons">
      <span className="btn btn--vote">
        <button
          onClick={() => handleVote("up")}
          className={`btn--circle btn--circle--up ${
            CurVote === Votes.UP ? "btn--circle--up--active" : ""
          }`}
        >
          <svg
            rpl=""
            fill="currentColor"
            height="16"
            className="btn__icon"
            icon-name="upvote-outline"
            viewBox="0 0 20 20"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>
          </svg>
        </button>
        {votes}
        <button
          onClick={() => handleVote("down")}
          className={`btn--circle btn--circle--down ${
            CurVote === Votes.DOWN ? "btn--circle--down--active" : ""
          }`}
        >
          <svg
            rpl=""
            fill="currentColor"
            height="16"
            className="btn__icon"
            icon-name="downvote-outline"
            viewBox="0 0 20 20"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>
          </svg>
        </button>
      </span>
      <button className="btn btn--click">
        <svg
          rpl=""
          aria-hidden="true"
          className="btn__icon"
          fill="currentColor"
          height="20"
          icon-name="comment-outline"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>{" "}
        </svg>
        {comments.filter((comment) => comment.parent === -1).length}
      </button>
      <a href="#" className="btn btn--click">
        <svg
          rpl=""
          aria-hidden="true"
          className="btn__icon"
          fill="currentColor"
          height="20"
          icon-name="share-ios-outline"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 11v5.378A2.625 2.625 0 0 1 16.378 19H3.622A2.625 2.625 0 0 1 1 16.378V11h1.25v5.378a1.373 1.373 0 0 0 1.372 1.372h12.756a1.373 1.373 0 0 0 1.372-1.372V11H19ZM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624 0 0 0-.884 0l-4 4 .884.884 2.933-2.933Z"></path>{" "}
        </svg>
        Share
      </a>
    </div>
  );
}
