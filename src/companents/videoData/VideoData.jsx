import { useState } from "react";
import "./_videoData.scss";
import numeral from "numeral";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

function videoData({ video: { snippet, statistics } }) {
  const [readMore, setReadMore] = useState(false);
  const {channelTitle,description,publishedAt, title}= snippet;
  const {likeCount, viewCount} = statistics;
  return (
    <div className="videoData ">
      <div className="videoData__top py-2">
        <h4>{title}</h4>
        <div className="d-flex justify-content-between align-items-center py-1">
          <div>
          <span style={{marginRight:"10px"}}>{numeral(viewCount).format("0.a")} view</span>
          <span >{moment(publishedAt).fromNow()}</span>
          </div>
         
          <div>
            <span className="likeIcons">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="likeIcons">
              <MdThumbDown size={26} /> {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoData__channel py-3 my-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://i.pinimg.com/736x/65/79/aa/6579aaaedde20287d08c896dbc8a2969.jpg"
            alt="video"
            className="mr-3 rounded-circle"
          />
          <div className="subscribes">
            <span>{channelTitle}</span>
            <span style={{ color: "gray" }}>
              {numeral(1000).format("0.a")} Subscribers
            </span>
          </div>
        </div>
        <button className="p-2 m-2 border-0 btn btn-gray">Subscribed</button>
      </div>
      <div className="videoData__description">
        <h4
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Read Less" : "Read Description"}
        </h4>
        {readMore && (
          <p>
          {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default videoData;
