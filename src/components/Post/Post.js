import PostButtons from "../PostButtons/PostButtons";
import PostContent from "../PostContent/PostContent";
import PostHeader from "../PostHeader/PostHeader";
import "./Post.scss";

export default function Post() {
  return (
    <>
      <PostHeader />
      <PostContent />
      <PostButtons />
    </>
  );
}
