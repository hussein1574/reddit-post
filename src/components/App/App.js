import "./App.scss";
import Post from "../Post/Post";
import Comments from "../Comments/Comments";

export default function App() {
  return (
    <div className="app">
      <Post />
      <Comments />
    </div>
  );
}
