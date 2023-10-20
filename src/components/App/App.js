import "./App.scss";
import Post from "../Post/Post";
import Comments from "../Comments/Comments";
import { useState } from "react";
import { Votes } from "../../utils/Enum";
const author = {
  id: 1,
  name: "Turbostrider27",
  username: "u/Turbostrider27",
  postKarma: 11852868,
  commentKarma: 465698,
  birthday: new Date("2015-12-18"),
};
const initalComments = [
  {
    parent: -1,
    id: 1,
    author,
    content: "This anime is my curse of being a completionist.",
    date: new Date("2022-03-25"),
    votes: [
      { vote: Votes.UP, user: 1 },
      { vote: Votes.UP, user: 32 },
    ],
  },
  {
    parent: 1,
    id: 2,
    author,
    content: "This anime is my curse of being a completionist.",
    date: new Date("2022-03-25"),
    votes: [{ vote: Votes.UP, user: 1 }],
  },
  {
    parent: 2,
    id: 3,
    author,
    content: "احدثك من اعماق النيستنج",
    date: new Date("2022-03-25"),
    votes: [{ vote: Votes.DOWN, user: 1 }],
    replies: [],
  },
  {
    parent: -1,
    id: 4,
    author,
    content: "A7la mesa 3ala eslam essam",
    date: new Date("2022-03-25"),
    votes: [],
    replies: [],
  },
];
export default function App() {
  const [comments, setComments] = useState(initalComments);
  return (
    <div className="app">
      <Post comments={comments} author={author} />
      <Comments comments={comments} onComment={setComments} />
    </div>
  );
}
