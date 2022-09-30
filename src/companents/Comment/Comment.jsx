import React from "react";
import moment from "moment";
import "./_comment.scss";

function Comment({ singleComment }) {
const { authorProfileImageUrl,authorDisplayName,textDisplay,publishedAt}= singleComment;
  return (
    <div className="singleComment p-2 d-flex w-100">
      <img src={authorProfileImageUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU'} alt="" />
      <div className="singleComment__body">
        <p className="singleComment__header">
          {authorDisplayName}
          <span> {moment(publishedAt).fromNow()} ago</span>
        </p>
        <p className="singleComment__comment">{textDisplay}</p>
      </div>
    </div>
  );
}

export default Comment;
