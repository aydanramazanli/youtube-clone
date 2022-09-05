import React from 'react';
import moment from 'moment';
import './_comment.scss';

function Comment() {
  return (
    <div className="singleComment p-2 d-flex w-100">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy4mGn2H4biENdFN-hIutdbAB9-aXVl08sXAzq_fFY4feDadOGQJH5kHBM1adSIKL2W0&usqp=CAU" alt="" />
      <div className="singleComment__body">
        <p className="singleComment__header">
          Aydan Samedova 
          <span> {moment('2022-09-09').fromNow()} ago</span>
        </p>
<p>Nice videooo</p>
      </div>
    </div>
  );
}

export default Comment;