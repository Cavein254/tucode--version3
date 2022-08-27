import CommentList from "./CommentList";

function Comment({postId, slug}) {
  return (
    <div>
      <CommentList postId={postId} slug={slug}/>
    </div>
  );
}

export default Comment;
