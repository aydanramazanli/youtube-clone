import "./_comments.scss";
import Comment from "../Comment/Comment";
import shortid from "shortid";
const Comments = () => {
  const handleComment = (e) => {
   e.preventDefault();
  };
  return (
    <>
      <div className="comments__form d-flex my-2">
        <form action="" onSubmit={handleComment}>
          <input
            type="text"
            className="flex-grow-1"
            placeholder="write a comment..."
          />
          <button className="border-0 p-2">comment</button>
        </form>
      </div>
      <div className="p-2 comments d-flex w-100">
        <div className="comment_list w-100">
          {[...Array(15)].map(() => (
            <Comment key={shortid()} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
