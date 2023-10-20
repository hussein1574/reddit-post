import { useState } from "react";
import Comment from "../Comment/Comment";
import "./Comments.scss";
import { Votes } from "../../utils/Enum";
const user = {
  id: 1,
  name: "Turbostrider27",
  username: "u/Turbostrider27",
  postKarma: 11852868,
  commentKarma: 465698,
  birthday: new Date("2015-12-18"),
};

export default function Comments({ comments, onComment }) {
  const [sortListOpen, setSortListOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("New");
  const [addCommentOpened, setAddCommentOpened] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  let sortedComments;
  if (selectedOption === "New") sortedComments = comments;
  if (selectedOption === "Best") {
    sortedComments = comments.slice().sort(
      (a, b) =>
        b.votes.reduce((acc, vote) => {
          if (vote.vote === Votes.UP) return acc + 1;
          if (vote.vote === Votes.DOWN) return acc - 1;
          else return acc;
        }, 0) -
        a.votes.reduce((acc, vote) => {
          if (vote.vote === Votes.UP) return acc + 1;
          if (vote.vote === Votes.DOWN) return acc - 1;
          else return acc;
        }, 0)
    );
    console.log(sortedComments);
  }

  function addComment() {
    onComment((comments) => [
      {
        author: user,
        id: Date.now(),
        content: commentContent,
        date: Date.now(),
        votes: [],
        parent: -1,
      },
      ...comments,
    ]);
    setCommentContent("");
    setAddCommentOpened(false);
  }
  return (
    <ul className="comments">
      <div className="comments__sort">
        <p className="comments__sort--text">Sort by:</p>
        <div className="comments__sort--dropdown">
          <button
            className={`comments__sort--dropdown--select ${
              sortListOpen ? "comments__sort--dropdown--select--active" : ""
            }`}
            onClick={() => setSortListOpen((isOpen) => !isOpen)}
          >
            {selectedOption}
            <svg
              rpl=""
              fill="currentColor"
              height="16"
              icon-name="caret-down-outline"
              viewBox="0 0 20 20"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
            </svg>
          </button>
          {sortListOpen ? (
            <ul className="comments__sort--dropdown__menu">
              <p className="comments__sort--dropdown__menu--title">Sort by</p>
              <li
                className={`comments__sort--dropdown__menu-item ${
                  selectedOption === "Best"
                    ? "comments__sort--dropdown__menu-item--selected"
                    : ""
                }`}
              >
                <button
                  onClick={() => {
                    setSortListOpen(false);
                    setSelectedOption("Best");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M16 10.011v-.445A10.264 10.264 0 0 0 10.273.221L10 .087l-.273.134A10.263 10.263 0 0 0 4 9.566v.445a3.727 3.727 0 0 0-3 3.7v3.141A1.14 1.14 0 0 0 2.125 18h15.75A1.14 1.14 0 0 0 19 16.852v-3.141a3.727 3.727 0 0 0-3-3.7ZM2.25 16.75v-3.039A2.493 2.493 0 0 1 4 11.3v5.45H2.25Zm12.5 0h-9.5V9.566A9.037 9.037 0 0 1 10 1.483a9.037 9.037 0 0 1 4.75 8.083v7.184Zm3 0H16V11.3a2.493 2.493 0 0 1 1.75 2.416v3.034ZM7 18.75h6V20H7v-1.25ZM7 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm4.75 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"></path>
                  </svg>
                  Best
                </button>
              </li>
              <li
                className={`comments__sort--dropdown__menu-item ${
                  selectedOption === "New"
                    ? "comments__sort--dropdown__menu-item--selected"
                    : ""
                }`}
              >
                <button
                  onClick={() => {
                    setSortListOpen(false);
                    setSelectedOption("New");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 20a1.143 1.143 0 0 1-1.007-.6l-1.281-2.36-2.424 1.16a1.145 1.145 0 0 1-1.63-1.184l.353-2.662-2.641-.492a1.144 1.144 0 0 1-.622-1.915L2.6 10 .748 8.053a1.145 1.145 0 0 1 .623-1.916l2.64-.488-.352-2.662A1.145 1.145 0 0 1 5.288 1.8l2.424 1.16L8.992.6a1.19 1.19 0 0 1 2.014 0l1.281 2.36 2.424-1.16a1.145 1.145 0 0 1 1.63 1.184l-.353 2.662 2.642.489a1.145 1.145 0 0 1 .622 1.915L17.4 10l1.85 1.947a1.145 1.145 0 0 1-.623 1.916l-2.64.488.351 2.662a1.144 1.144 0 0 1-1.627 1.187l-2.424-1.16-1.28 2.36A1.142 1.142 0 0 1 10 20Zm-2.244-4.242a1.144 1.144 0 0 1 1.007.6L10 18.636l1.236-2.279a1.147 1.147 0 0 1 1.5-.488l2.34 1.116-.34-2.569a1.146 1.146 0 0 1 .93-1.277l2.546-.47-1.785-1.88a1.146 1.146 0 0 1 0-1.578l1.785-1.88-2.547-.471a1.142 1.142 0 0 1-.928-1.276l.338-2.569-2.338 1.116a1.149 1.149 0 0 1-1.5-.488L10 1.364 8.763 3.643a1.147 1.147 0 0 1-1.5.488l-2.34-1.116.34 2.569a1.146 1.146 0 0 1-.93 1.277l-2.546.47 1.786 1.88a1.146 1.146 0 0 1 0 1.578l-1.786 1.88 2.548.471a1.142 1.142 0 0 1 .928 1.276l-.34 2.569 2.34-1.116c.154-.073.322-.11.493-.111Z"></path>
                  </svg>
                  New
                </button>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      <div>
        {addCommentOpened ? (
          <form className="comments__add" onSubmit={addComment}>
            <textarea
              className="comments__add__text"
              placeholder="What are your thoughts ?"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            />
            <button className="comments__add__btn">Comment</button>
          </form>
        ) : (
          <button
            onClick={() => setAddCommentOpened(true)}
            className="comments__add__btn"
            style={{ alignSelf: "flex-start" }}
          >
            <svg
              rpl=""
              fill="currentColor"
              height="20"
              icon-name="add-outline"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>
            </svg>
            Add a Comment
          </button>
        )}
      </div>
      {sortedComments.map((comment) => {
        return comment.parent === -1 ? (
          <Comment
            onComment={onComment}
            comment={comment}
            comments={sortedComments}
            isChild={false}
            key={comment.id}
            user={user}
          />
        ) : (
          ""
        );
      })}
    </ul>
  );
}
