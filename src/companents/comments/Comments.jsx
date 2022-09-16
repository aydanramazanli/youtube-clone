import "./_comments.scss";
import Comment from "../comment/Comment";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { getCommentList } from "../../redux/slices/comment";
import { useEffect } from "react";

const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentList(videoId));
  }, [dispatch, videoId]);

  const videoComments = useSelector((state) => state.commentList.comments);
  const listComment = videoComments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  return (
    <>
      <div className="comments__form d-flex my-2">
        <span>{totalComments} Comments</span>
      </div>
      <div className="p-2 comments d-flex w-100">
        <div className="comment_list w-100">
          {listComment?.map((singleComment) => (
            <Comment singleComment={singleComment} key={shortid()} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
