import PostButtons from "../PostButtons/PostButtons";
import PostContent from "../PostContent/PostContent";
import PostHeader from "../PostHeader/PostHeader";
import "./Post.scss";

export default function Post({ comments, author }) {
  return (
    <>
      <PostHeader />
      <PostContent />
      <PostButtons comments={comments} />
    </>
  );
}
